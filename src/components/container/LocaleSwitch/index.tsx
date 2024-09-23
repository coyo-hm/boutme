import { useLocale, useTranslations } from "next-intl";
import { routing, usePathname, useRouter } from "@i18n/routing";
import styles from "./localeSwitch.module.scss";
import GlobeIcon from "@icons/globe.svg";

const LocaleSwitch = () => {
	const router = useRouter();
	const pathname = usePathname();
	const selectedLocale = useLocale();
	const t = useTranslations("locale");

	return (
		<label className={styles.localeSwitch}>
			<GlobeIcon width={20} height={20} fill="none" />
			<span>{t("placeholder")}</span>
			{routing.locales.map(locale => (
				<button key={locale} id={`btn-${locale}`} className={selectedLocale === locale ? styles.selected : ""} onClick={() => router.replace(pathname, { locale })}>
					{t(locale)}
				</button>
			))}

		</label>
	);
};
export default LocaleSwitch;
