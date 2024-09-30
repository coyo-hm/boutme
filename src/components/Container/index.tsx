"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./container.module.scss";
import Sidebar from "@components/Sidebar";
import { usePathname } from "@i18n/routing";
import LINKS from "@constants/links";

interface Props extends PropsWithChildren {}

const Container = ({ children }: Props) => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		const cursor = cursorRef.current as HTMLDivElement;

		if (pathname === LINKS[0].url) {
			cursor.style.display = "none";
			return;
		}

		cursor.style.display = "block";

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
	}, [pathname]);

	return (
		<div className={styles.container}>
			<div className={styles.cursor} ref={cursorRef} />
			<Sidebar />
			<div className={styles.content}>{children}</div>
		</div>
	);
};
export default Container;
