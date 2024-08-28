import Link from "next/link";
import styles from "./footer.module.scss";
import IconMail from "@assets/mail.svg";
import IconGithub from "@assets/github.svg";

export default function Footer() {
	return (
		<footer id={"footer"} className={"w-full py-4 mt-16"}>
			<div className={styles.links}>
				<Link href="mailto:bsydwp@gmail.com">
					<IconMail width={24} height={24} className={styles.icon} />
				</Link>
				<Link href={"https://github.com/coyo-hm"} target={"_blank"} rel="noreferrer">
					<IconGithub width={24} height={24} className={styles.icon} />
				</Link>
			</div>
			<div className={"text-center mt-1.5 text-lg"}>© 2024 COYO All rights reserved.</div>
		</footer>
	);
}
