"use client";

import { PropsWithChildren } from "react";
import styles from "./container.module.scss";
import Sidebar from "@components/container/Sidebar";

interface Props extends PropsWithChildren {}

const Container = ({ children }: Props) => {

	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.content}>{children}</div>
		</div>
	);
};
export default Container;
