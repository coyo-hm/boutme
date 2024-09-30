import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./projectDetail.module.scss";

import ImgTag from "@projects/blog-tag.gif";
import ImgCarousel from "@projects/blog-carousel.gif";
import ImgSeries from "@projects/blog-series.gif";

const BlogDetail = () => {
	const t = useTranslations("projectsPage.blog");

	const highlightText = (key: string) =>
		t.rich(key, {
			highlight: chunks => <span className={styles.highlight}>{chunks}</span>
		});

	return (
		<ul className={styles.blog}>
			<li>
				{t.rich("detail1", {
					highlight: chunks => <span className={styles.highlight}>{chunks}</span>,
					post: chunks => (
						<Link
							className={styles.link}
							href={"https://coyo-hm.github.io/post/nextjs-gtag"}
							target={"_blank"}
							rel="noreferrer"
						>
							{chunks}
						</Link>
					)
				})}
			</li>
			<li>
				<Image src={ImgTag} alt={"blog-tag"} unoptimized />
				<Image src={ImgCarousel} alt={"blog-carousel"} unoptimized />
				<Image src={ImgSeries} alt={"blog-series"} unoptimized />
				{highlightText("detail6")}
			</li>
			<li>{t("detail2")}</li>
			<li>
				{t.rich("detail3", {
					highlight: chunks => <span className={styles.highlight}>{chunks}</span>,
					series: chunks => (
						<Link
							className={styles.link}
							href={"https://coyo-hm.github.io/series/commit-msg-management"}
							target={"_blank"}
							rel="noreferrer"
						>
							{chunks}
						</Link>
					)
				})}
			</li>
			<li>{highlightText("detail4")}</li>
			<li>
				{t.rich("detail5", {
					branch: chunks => (
						<Link
							className={styles.link}
							href={"https://github.com/coyo-hm/COYO-HM.github.io/tree/gatsby-backup"}
							target={"_blank"}
							rel="noreferrer"
						>
							{chunks}
						</Link>
					)
				})}
			</li>
		</ul>
	);
};
export default BlogDetail;
