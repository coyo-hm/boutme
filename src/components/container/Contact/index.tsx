import { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@i18n/navigation";
import styles from "./contact.module.scss";

import IconCopy from "@icons/copy.svg";
import IconLink from "@icons/link-external.svg";
import IconMail from "@assets/mail.svg";
import IconBlog from "@assets/star.svg";
import IconGithub from "@assets/github.svg";

const EMAiL = "bsydwp@gmail.com";

const Contact = () => {
	const t = useTranslations("container");

	const onCopyEmail = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			await navigator.clipboard.writeText(EMAiL);
			alert(t("copyComplete"));
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className={styles.contact}>
			<h1>CONTACT</h1>
			<Link href={`mailto:${EMAiL}`}>
				<IconMail width={24} height={24} className={styles.icon} />
				<span>{EMAiL}</span>
				<button className={styles.copyButton} onClick={onCopyEmail}>
					<IconCopy width={20} height={20} />
				</button>
			</Link>
			<Link className={styles.blog} href={"https://coyo-hm.github.io/"} target={"_blank"} rel="noreferrer">
				<IconBlog width={24} height={24} />
				<span>BLOG</span>
				<IconLink width={28} height={28} />
			</Link>
			<Link href={"https://github.com/coyo-hm"} target={"_blank"} rel="noreferrer">
				<IconGithub width={24} height={24} className={styles.icon} />
				<span>GITHUB</span>
				<IconLink width={28} height={28} />
			</Link>
		</div>
	);
};

export default Contact;
