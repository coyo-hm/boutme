import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./projectDetail.module.scss";

import ImgChart1 from "@projects/disboard-chart-1.png";
import ImgChart2 from "@projects/disboard-chart-2.png";
import ImgAssignment from "@projects/disboard-assinment.png";

const DisboardDetail = () => {
	const t = useTranslations("projectsPage.disboard");
	const highlightText = (key: string) =>
		t.rich(key, {
			highlight: chunks => <span className={styles.highlight}>{chunks}</span>
		});
	return (
		<ul className={styles.disboard}>
			{["detail1"].map(key => (
				<li key={key}>{t(key)}</li>
			))}
			<li>
				<Image src={ImgChart1} alt={"disboard-chart-1"} unoptimized />
				<Image src={ImgChart2} alt={"disboard-chart-2"} unoptimized />
				{highlightText("detail2")}
			</li>
			<li>
				<Image src={ImgAssignment} alt={"disboard-assinment"} unoptimized />
				{highlightText("detail3")}
			</li>
			<li>{highlightText("detail4")}</li>
		</ul>
	);
};

export default DisboardDetail;
