"use client";

import React, { useEffect, useRef } from "react";
import styles from "./container.module.scss";
import TableOfContents from "@components/TableOfContents/TableOfContents";

export default function Container({ children }: { children: React.ReactNode }) {
	const shapeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!shapeRef?.current) return;
		let animation = "";
		for (let i = 0; i <= 50; i++) {
			animation += '<div class="shape-container--' + i + ' shape-animation"><div class="random-shape"></div></div>';
		}

		shapeRef.current.innerHTML += animation;
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>{children}</div>
			<TableOfContents />
			{/*<div className={styles.shape} ref={shapeRef}/>*/}
		</div>
	);
}
