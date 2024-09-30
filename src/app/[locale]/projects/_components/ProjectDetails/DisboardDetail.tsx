import { useTranslations } from "next-intl";
import styles from "./projectDetail.module.scss";

const DisboardDetail = () => {
	const t = useTranslations("projectsPage.disboard");

	return (
		<ul className={styles.disboard}>
			{["detail1", "detail2"].map(key => (
		<li key={key}>{t(key)}</li>
	))}
	</ul>
);
};

export default DisboardDetail;
