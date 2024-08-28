"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Matter from "matter-js";
import styles from "./FallingText.module.scss";

interface Props {
	text: string;
	highlightTexts?: { label: string; url: string }[];
}

const FallingText = ({ text, highlightTexts = [] }: Props) => {
	const { locale } = useParams() as { locale: string };
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	const splitWords = () => {
		const textNode = textRef.current as HTMLElement;
		const words = text.split(" ");
		const newDomElements = words.map(word => {
			for (const { label, url } of highlightTexts) {
				if (word.startsWith(label)) {
					return `<a class="${styles.word} ${styles.highlight}" href="/${locale}${url}">
							${word}&nbsp;
						</a>`;
				}
			}
			return `<span class="${styles.word}">${word}&nbsp;</span>`;
		});
		textNode.innerHTML = newDomElements.join("");
	};

	useEffect(() => {
		splitWords();

		const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
		const params = {
			isStatic: true,
			render: {
				fillStyle: "transparent"
			}
		};

		const canvasSize = {
			width: containerRef?.current?.clientWidth || window.innerWidth - 20,
			height: containerRef?.current?.clientHeight || window.innerHeight - 154
		};
		const engine = Engine.create({});
		const render = Render.create({
			element: containerRef.current as HTMLElement,
			engine: engine,
			options: {
				...canvasSize,
				background: "transparent",
				wireframes: false
			}
		});

		const floor = Bodies.rectangle(canvasSize.width / 2, canvasSize.height, canvasSize.width, 50, params);
		const wall1 = Bodies.rectangle(0, canvasSize.height / 2, 50, canvasSize.height, params);
		const wall2 = Bodies.rectangle(canvasSize.width, canvasSize.height / 2, 50, canvasSize.height, params);
		const top = Bodies.rectangle(canvasSize.width / 2, 0, canvasSize.width, 50, params);

		const wordElements = document.querySelectorAll(`.${styles.word}`);
		const wordBodies = Array.from(wordElements).map(elemRef => {
			const width = (elemRef as HTMLElement).offsetWidth;
			const height = (elemRef as HTMLElement).offsetHeight;

			return {
				body: Bodies.rectangle(canvasSize.width / 2, 0, width, height, {
					render: {
						fillStyle: "transparent"
					}
				}),
				elem: elemRef,
				render() {
					const { x, y } = this.body.position;
					(this.elem as HTMLElement).style.top = `${y - 20}px`;
					(this.elem as HTMLElement).style.left = `${x - width / 2}px`;
					(this.elem as HTMLElement).style.transform = `rotate(${this.body.angle}rad)`;
				}
			};
		});

		const mouse = Mouse.create(containerRef.current as HTMLElement);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
				}
			}
		});

		World.add(engine.world, [floor, ...wordBodies.map(box => box.body), wall1, wall2, top, mouseConstraint]);

		Runner.run(engine);
		Render.run(render);

		(function rerender() {
			wordBodies.forEach(element => {
				element.render();
			});
			Matter.Engine.update(engine);
			requestAnimationFrame(rerender);
		})();

		return () => {
			World.clear(engine.world, false);
			Engine.clear(engine);
			render.canvas.remove();
		};
	}, []);

	return (
		<div className={styles.wordContainer} ref={containerRef}>
			<div ref={textRef}>
				{/*<div className={"text"}>*/}
				{text}
			</div>
		</div>
	);
};
export default FallingText;
