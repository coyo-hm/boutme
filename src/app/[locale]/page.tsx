import styles from "./page.module.scss";
import FileBox from "@commonComponents/FileBox";
import LINKS from "@constants/links";
import { Link } from "@i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function MainPage() {
	const locale = useLocale()
	const t = useTranslations("mainPage")
	return (
		<div className={styles.mainPage}>
			<FileBox className={styles.box}>
				<h1 className={styles.name}>COYO</h1>
				<div className={styles.line} />
				<h1 className={styles.job}>FRONTEND DEVELOPER</h1>
				<div className={styles.greeting}>
					<p className={`${styles.greetingText} ${locale}`}>{t("greetings")}</p>
				</div>
				<div className={styles.line} />
				<div className={styles.toc}>
					{LINKS.map(({ label, url }) => (
						<Link href={url} key={label} className={styles.link}>
							<div className={styles.icon}>📁</div>
							{label}
						</Link>
					))}</div>
			</FileBox>
		</div>
	);
}
