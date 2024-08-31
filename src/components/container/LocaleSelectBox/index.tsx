"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@i18n/i18n";
import { usePathname, useRouter } from "@i18n/navigation";

import styles from "./localeSelectBox.module.scss";
import DownArrowIcon from "@icons/down-chevron.svg";
import GlobeIcon from "@icons/globe.svg";

// interface Props {}

const LocaleSelectBox = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [styleClass, setStyleClass] = useState<any>("");
	const selectedLocale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations("locale");

	useEffect(() => {
		(async () => {
			const styles = isOpen
				? await import("./localeSelectBox.open.module.scss")
				: await import("./localeSelectBox.close.module.scss");
			setStyleClass(styles);
		})();
	}, [isOpen]);

	return (
		<div className={styles.localeSelectBoxContainer}>
			<button className={`${styles.btnValue} ${styleClass.btnValue}`} onClick={() => setIsOpen(prev => !prev)}>
				<GlobeIcon />
				{t("placeholder")}
				<DownArrowIcon className={styleClass.arrIcon} />
			</button>
			{isOpen && (
				<div className={styles.options}>
					<div className={styles.scrollArea}>
						{locales.map(locale => (
							<button
								className={`${styles.option} ${selectedLocale === locale ? styles.selected : ""}`}
								key={locale}
								onClick={() => router.replace(pathname, { locale })}
							>
								{t(locale)}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default LocaleSelectBox;
