"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@i18n/i18n";
import { usePathname, useRouter } from "@i18n/navigation";

import styles from "./localeSelectBox.module.scss";
import DownArrowIcon from "@icons/down-chevron.svg";
import GlobeIcon from "@icons/globe.svg";

// interface Props {}

const LocaleSelectBox = () => {
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations("locale");
	const selectedLocale = useLocale();

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [styleClass, setStyleClass] = useState<any>("");

	const buttonRef = useRef<HTMLButtonElement>(null);
	const optionsRef = useRef<HTMLDivElement>(null);




	useEffect(() => {
		(async () => {
			const styles = isOpen
				? await import("./localeSelectBox.open.module.scss")
				: await import("./localeSelectBox.close.module.scss");
			setStyleClass(styles);
		})();
	}, [isOpen]);

	const closeSelect = (e: MouseEvent) => {
		if (!optionsRef.current?.contains(e.target as any) && e.target !== buttonRef.current) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("click", closeSelect);
		} else {
			window.removeEventListener("click", closeSelect);
		}
	}, [isOpen]);



	return (
		<div className={styles.localeSelectBoxContainer}>
			<button
				className={`${styles.btnValue} ${styleClass.btnValue}`}
				onClick={() => setIsOpen(prev => !prev)}
				ref={buttonRef}
			>
				<GlobeIcon />
				{t("placeholder")}
				<DownArrowIcon className={styleClass.arrIcon} />
			</button>
			{isOpen && (
				<div className={styles.options} ref={optionsRef}>
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
