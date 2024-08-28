

import styles from "./tableOfContents.module.scss";
import IconArrow from "@assets/arrow.svg";
import LINKS from "@constants/links";
import { Link } from "@i18n/navigation";

const TableOfContents = () => {


	// const onUp = () => {
	// 	window.scroll({ top: 0, behavior: "smooth" });
	// };
	//
	// const onDown = () => {
	// 	document.body.scrollTop = document.body.scrollHeight;
	// 	window.scroll(0, document.body.scrollHeight);
	// };
	return (
		<div className={styles.tableOfContents}>
			<div>
				<Link href={"/"}>
					<IconArrow width={24} className={styles.up} />
				</Link>
				<ul>
					{LINKS.map(({ label, url }) => (
						<li key={label}>
							<Link href={url}>{label}</Link>
						</li>
					))}
				</ul>
				<Link href={"#footer"}>
					<IconArrow width={24} className={styles.down} />
				</Link>
			</div>
		</div>
	);
};

export default TableOfContents;