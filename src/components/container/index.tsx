"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./container.module.scss";
import Sidebar from "@components/container/Sidebar";

interface Props extends PropsWithChildren {}

const Container = ({ children }: Props) => {
	const cursorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const cursor = cursorRef.current as HTMLDivElement;
		const linkEle = document.querySelectorAll("a");
		const buttonEle = document.querySelectorAll("button");

		const moveCursor = (e: any) => {
			cursor.style.left = e?.pageX + "px";
			cursor.style.top = e.pageY - scrollY + "px";
		};

		window.addEventListener("scroll", moveCursor);
		window.addEventListener("mousemove", moveCursor);

		[...linkEle, ...buttonEle].forEach(ele => {
			ele.addEventListener("mouseover", () => {
				cursor.style.transform = "scale(2)";
			});
			ele.addEventListener("mouseleave", () => {
				cursor.style.transform = "scale(1)";
			});
		});

	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.cursor} ref={cursorRef} />
			<Sidebar />
			<div className={styles.content}>{children}</div>
		</div>
	);
};
export default Container;
