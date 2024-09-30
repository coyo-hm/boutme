import { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@i18n/routing";
import styles from "./contact.module.scss";

import IconCopy from "@icons/copy.svg";
import IconLink from "@icons/link-external.svg";
import IconMail from "@icons/mail.svg";
import IconBlog from "@icons/star.svg";
import IconGithub from "@logos/github.svg";
import INFO from "@constants/info";


const Contact = () => {
	const t = useTranslations("container");

	const onCopyEmail = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			await navigator.clipboard.writeText(INFO.EMAiL);
			alert(t("copyComplete"));
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className={styles.contact}>
			<h1>CONTACT</h1>
			<Link href={`mailto:${INFO.EMAiL}`}>
				<IconMail width={24} height={24} className={styles.icon} />
				<span>{INFO.EMAiL}</span>
				<button className={styles.copyButton} onClick={onCopyEmail}>
					<IconCopy width={20} height={20} />
				</button>
			</Link>
			<Link className={styles.blog} href={INFO.URL.BLOG} target={"_blank"} rel="noreferrer">
				<IconBlog width={24} height={24} />
				<span>BLOG</span>
				<IconLink width={28} height={28} />
			</Link>
			<Link href={INFO.URL.GITHUB} target={"_blank"} rel="noreferrer">
				<IconGithub width={24} height={24} className={styles.icon} />
				<span>GITHUB</span>
				<IconLink width={28} height={28} />
			</Link>
		</div>
	);
};

export default Contact;
