import Link from "next/link";
import styles from "./tableOfContents.module.scss";
import IconArrow from "@assets/arrow.svg";

const LINKS = [
	"abouts",
	"skills",
	"projects"
	// , "careers", "activities"1
];

export default function TableOfContents() {
	const onUp = () => {
		window.scroll({ top: 0, behavior: "smooth" });
	};

	const onDown = () => {
		document.body.scrollTop = document.body.scrollHeight;
		window.scroll(0, document.body.scrollHeight);
	};
	return (
		<div className={styles.tableOfContents}>
			<div>
				<Link href={"#home"}>
					<IconArrow width={24} className={styles.up} />
				</Link>
				<ul>
					{LINKS.map(id => (
						<li key={id}>
							<Link href={`#${id}`}>{id}</Link>
						</li>
					))}
				</ul>
				<Link href={"#footer"}>
					<IconArrow width={24} className={styles.down} />
				</Link>
			</div>
		</div>
	);
}
