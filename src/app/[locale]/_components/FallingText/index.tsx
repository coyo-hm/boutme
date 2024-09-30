"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import styles from "./FallingText.module.scss";
import { Link } from "@i18n/routing";

interface Props {
	text: string;
	highlightTexts?: { label: string; url: string }[];
}

const FallingText = ({ text, highlightTexts = [] }: Props) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const engineRef = useRef(Matter.Engine.create());
	const requestRef = useRef<any>();

	const animate = () => {
		const { Engine, Bodies, Composite, Mouse, MouseConstraint } = Matter;
		const container = containerRef.current as HTMLDivElement;

		const canvasSize = {
			width: containerRef?.current?.clientWidth || 0,
			height: containerRef?.current?.clientHeight || 0
		};

		engineRef.current = Engine.create();
		const engine = Engine.create();

		const params = {
			isStatic: true,
			render: {
				fillStyle: "transparent"
			}
		};

		const walls = [
			Bodies.rectangle(canvasSize.width / 2, canvasSize.height, canvasSize.width, 10, params),
			Bodies.rectangle(0, canvasSize.height / 2, 50, canvasSize.height, params),
			Bodies.rectangle(canvasSize.width, canvasSize.height / 2, 50, canvasSize.height, params)
		];

		const wordElements = Array.from(container.querySelectorAll(`.${styles.word}`)) as HTMLElement[];
		const wordBodies = wordElements.map(element => {
			const width = element.offsetWidth;
			const height = element.offsetHeight;
			return {
				body: Bodies.rectangle(canvasSize.width / 2, -50, width, height, {
					render: {
						fillStyle: "transparent"
					},
					// restitution: 0.2
				}),
				elem: element,
				render() {
					const { x, y } = this.body.position;

					this.elem.style.top = `${y - height / 2}px`;
					this.elem.style.left = `${x - width / 2}px`;
					this.elem.style.transform = `rotate(${this.body.angle}rad)`;
				}
			};
		});
		const mouse = Mouse.create(container);

		const mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
				}
			}
		});

		Composite.add(engine.world, [...walls, mouseConstraint, ...wordBodies.map(ele => ele.body)]);

		(function rerender() {
			wordBodies.forEach(element => {
				element.render();
			});
			Engine.update(engine);
			requestRef.current = requestAnimationFrame(rerender);
		})();
	};

	useEffect(() => {
		animate();
		return () => {
			cancelAnimationFrame(requestRef.current);
			Matter.Engine.clear(engineRef.current);
		};
	}, []);

	return (
		<div className={styles.wordContainer} ref={containerRef}>
			{text.split(" ").map((word, index) => {
				for (const { label, url } of highlightTexts) {
					if (word.startsWith(label)) {
						return (
							<Link href={url} className={`${styles.word} ${styles.highlight}`} key={index}>
								#{word}&nbsp;
							</Link>
						);
					}
				}
				return (
					<span className={styles.word} key={index}>
						{word}&nbsp;
					</span>
				);
			})}
		</div>
	);
};
export default FallingText;
