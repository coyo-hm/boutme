import Link from "next/link";
import styles from "./tableOfContents.module.scss"

const LINKS = ["home", "abouts", "skills", "projects", "careers", "activities"];

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
			{/*<button onClick={onUp}>up</button>*/}
			<ul>
				{LINKS.map(id => (
					<li key={id}>
						<Link href={`#${id}`} >{id}</Link>
					</li>
				))}
			</ul>
			{/*<button onClick={onDown}>down</button>*/}
		</div>
	);
}
