import { useTranslations } from "next-intl";
import styles from "./projectDetail.module.scss";

const KanbanBoardDetail = () => {
	const t = useTranslations("projectsPage.kanbanBoard");

	return (
		<ul className={styles.kanbanBoard}>
			{["detail1", "detail2", "detail3"].map(key => (
				<li key={key}>{t(key)}</li>
			))}
		</ul>
	);
};

export default KanbanBoardDetail;
