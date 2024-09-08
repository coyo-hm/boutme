"use client";

import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { Link, usePathname } from "@i18n/navigation";
import LINKS from "@constants/links";
import LocaleSwitch from "@components/container/LocaleSwitch";
import Contact from "@components/container/Contact";

const Sidebar = () => {
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);
	const [styleClass, setStyleClass] = useState<any>("");

	useEffect(() => {
		(async () => {
			const styles = isOpen ? await import("./sidebar.open.module.scss") : await import("./sidebar.module.scss");
			setStyleClass(styles);
		})();
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<div className={styles.sidebarContainer}>
			<button
				className={`${styles.hamburgerIcon} ${styleClass?.hamburgerIcon}`}
				onClick={() => setIsOpen(prev => !prev)}
			>
				<span />
				<span />
				<span />
				<span />
			</button>
			<div className={`${styles.sidebar} ${styleClass?.sidebar}`}>
				<LocaleSwitch />
				<div className={styles.toc}>
					{LINKS.map(({ label, url }) => (
						<Link href={url} key={label} className={pathname === url ? styles.active : ""}>
							{label}
						</Link>
					))}
				</div>
				<Contact />
				<footer className={"text-center"}>© 2024 COYO All rights reserved.</footer>
			</div>
		</div>
	);
};

export default Sidebar;
