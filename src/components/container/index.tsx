"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./container.module.scss";
import Sidebar from "@components/container/Sidebar";

interface Props extends PropsWithChildren {}

const Container = ({ children }: Props) => {
	const cursorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const cursor = cursorRef.current as HTMLDivElement;
		const moveCursor = (e: any) => {
			cursor.style.left = e?.pageX + "px";
			cursor.style.top = e.pageY - scrollY + "px";
		};
		window.addEventListener("scroll", moveCursor);
		window.addEventListener("mousemove", moveCursor);


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
