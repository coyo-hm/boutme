"use client";

import { PropsWithChildren } from "react";
import styles from "./container.module.scss";
import Footer from "@components/container/Footer";
import TableOfContents from "@components/container/TableOfContents/TableOfContents";
import { usePathname } from "@i18n/navigation";

interface Props extends PropsWithChildren {}

const Container = ({ children }: Props) => {
	const pathname = usePathname();

	return (
		<div className={styles.container}>
			{pathname !== "/" && <TableOfContents />}
			<div className={styles.content}>{children}</div>
			<Footer />
		</div>
	);
};
export default Container;
