import { useLocale, useTranslations } from "next-intl";
import styles from "./page.module.scss";
import LINKS from "@constants/links";
import INFO from "@constants/info";
import FallingText from "./_components/FallingText";

const TEXT =
	"Web developer with over 2 years of experience, skills I have a background in startups. I've been responsible for the web front end from initial design to post-deployment. overview activities projects";

export default function MainPage() {
	const locale = useLocale()
	const t = useTranslations("mainPage")
	return (
		<section className={styles.mainPage}>
			{/*<FallingText text={TEXT} highlightTexts={[...LINKS, { label: "careers", url: "/activities" }, { label: "activities", url: "/activities" }]} />*/}
			<FallingText text={TEXT} highlightTexts={LINKS} />
			<div className={styles.box}>
				<h1 className={styles.name}>{INFO.NICKNAME}</h1>
				<div className={styles.line} />
				<h1 className={styles.job}>FRONTEND DEVELOPER</h1>
				<div className={styles.greeting}>
					<p className={`${styles.greetingText} ${locale}`}>{t("greetings")}</p>
				</div>
			</div>
		</section>
	);
}
