import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./page.module.scss";
import INFO from "@constants/info";

export default function OverviewPage() {
	const t = useTranslations("overviewPage");
	return (
		<section className={styles.overviewPage}>
			<header className={"pageTitle"}>OVERVIEW</header>
			<h2 className={styles.overview}>{t("overview")}</h2>
			{/*<h2 className={styles.subjectTitle}>{t("section2.title")}</h2>*/}
			<h2 className={styles.subjectTitle}>
				{t.rich("section3.title", {
					highlight: chunks => <span className={styles.highlight}>{chunks}</span>
				})}
			</h2>
			<ul className={styles.subject}>
				{["", INFO.URL.BLOG, "/projects#DISBOARD"].map((link, i) => (
					<li key={i}>
						{t.rich(`section3.text${i + 1}`, {
							a: chunks => (
								<Link href={link} target={"_blank"} rel="noreferrer">
									{chunks}
								</Link>
							)
						})}
					</li>
				))}
			</ul>
			<h2 className={styles.subjectTitle}>
				{t.rich("section4.title", {
					highlight: chunks => <span className={styles.highlight}>{chunks}</span>
				})}
			</h2>
			<ul className={styles.subject}>
				<li>
					{t.rich(`section4.text1`, {
						a: chunks => (
							<Link href={"https://coyo-hm.github.io/series/commit-msg-management"} target={"_blank"} rel="noreferrer">
								{chunks}
							</Link>
						)
					})}
				</li>
				<li>
					{t.rich(`section4.text2`, {
						a: chunks => (
							<Link
								href={"https://coyo-hm.github.io/post/nextjs-large-page-data-warning"}
								target={"_blank"}
								rel="noreferrer"
							>
								{chunks}
							</Link>
						)
					})}
					{t.rich(`section4.text3`, {
						a: chunks => (
							<Link href={"https://coyo-hm.github.io/post/husky-git-hook"} target={"_blank"} rel="noreferrer">
								{chunks}
							</Link>
						)
					})}
				</li>
			</ul>
		</section>
	);
}
