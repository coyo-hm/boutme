import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./projectDetail.module.scss";

import ImgMarquee from "@projects/coyo-ui-marquee.gif";


const COYOUIDetail = () => {
	const t = useTranslations("projectsPage.coyoui");
	const highlightText = (key: string) =>
		t.rich(key, {
			highlight: chunks => <span className={styles.highlight}>{chunks}</span>
		});
	return (
		<ul className={styles.coyoui}>
			{["detail1", "detail2"].map(key => (
				<li key={key}>{highlightText(key)}</li>
			))}
			<li>
				<Image src={ImgMarquee} alt={"coyo-ui-marquee"} unoptimized />
				{t("detail3")}
			</li>
		</ul>
	);
};
export default COYOUIDetail;
