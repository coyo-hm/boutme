import { useTranslations } from "next-intl";
import styles from "./projectDetail.module.scss";

const COYOUIDetail = () => {
	const t = useTranslations("projectsPage.coyoui");
	const highlightText = (key: string) =>
		t.rich(key, {
			highlight: chunks => <span className={styles.highlight}>{chunks}</span>
		});
	return (
		<ul className={styles.coyoui}>
			<li>{highlightText("detail1")}</li>
			<li>{t("detail2")}</li>
		</ul>
	);
};
export default COYOUIDetail;
