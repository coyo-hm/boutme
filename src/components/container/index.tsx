"use client";

import { PropsWithChildren } from "react";
import styles from "./container.module.scss";
import { usePathname } from "@i18n/navigation";
import LocaleSelectBox from "@components/container/LocaleSelectBox";
import TableOfContents from "@components/container/TableOfContents";
import Footer from "@components/container/Footer";

interface Props extends PropsWithChildren {}

const Container = ({ children }: Props) => {
	const pathname = usePathname();

	return (
		<div className={styles.container}>
			<LocaleSelectBox/>
			{pathname !== "/" && <TableOfContents />}
			<div className={styles.content}>{children}</div>
			<Footer />
		</div>
	);
};
export default Container;
