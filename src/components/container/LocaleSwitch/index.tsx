import { useLocale, useTranslations } from "next-intl";
import { locales } from "@i18n/i18n";
import { usePathname, useRouter } from "@i18n/navigation";
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
			{locales.map(locale => (
				<button key={locale} id={`btn-${locale}`} className={selectedLocale === locale ? styles.selected : ""} onClick={() => router.replace(pathname, { locale })}>
					{t(locale)}
				</button>
			))}

		</label>
	);
};
export default LocaleSwitch;
