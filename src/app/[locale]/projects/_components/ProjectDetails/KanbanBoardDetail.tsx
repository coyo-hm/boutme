import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./projectDetail.module.scss";

import ImgTheme from "@projects/kanbanBoard-theme.gif";
import ImgColor from "@projects/kanbanBoard-color.gif";

const KanbanBoardDetail = () => {
	const t = useTranslations("projectsPage.kanbanBoard");

	const highlightText = (key: string) =>
		t.rich(key, {
			highlight: chunks => <span className={styles.highlight}>{chunks}</span>
		});

	return (
		<ul className={styles.kanbanBoard}>
			<li>{highlightText("detail1")}</li>
			<li>
				<Image src={ImgTheme} alt={"kanbanBoard-theme"} unoptimized />
				{highlightText("detail2")}
			</li>
			<li>
				<Image src={ImgColor} alt={"kanbanBoard-color"} unoptimized />
				{t("detail3")}
			</li>
		</ul>
	);
};

export default KanbanBoardDetail;
