import Link from "next/link";
import PageTitle from "@components/PageTitle";
import styles from "./abouts.module.scss";

import IconCalender from "@assets/calender.svg";
import IconMail from "@assets/mail.svg";
import IconBlog from "@assets/blog.svg";
import IconGithub from "@assets/github.svg";


export default function Abouts() {
	return (
		<div id={"abouts"} className={styles.abouts}>
			<div>
				<PageTitle className={styles.title}>About me</PageTitle>
				<div className={styles.birth}>
					<IconCalender width={24} height={24} />
					<span>1998</span>
				</div>
				<Link className={styles.mail} href="mailto:bsydwp@gmail.com">
					<IconMail width={24} height={24} />
					<span>bsydwp@gmail.com</span>
				</Link>
				<Link className={styles.link1} href={"https://coyo-hm.github.io/"} target={"_blank"} rel="noreferrer">
					<IconBlog width={24} height={24} />
					<span>BLOG</span>
				</Link>
				<Link className={styles.link2} href={"https://github.com/coyo-hm"} target={"_blank"} rel="noreferrer">
					<IconGithub width={24} height={24} className={styles.github}/>
					<span>GITHUB</span>
				</Link>
				<ul className={styles.description}>
					<li>FE 분야 뿐만 아니라 다양한 개발 분야를 깊이 있게 다져나가려고 노력하고 있습니다.</li>
					<li><span className={"text-yellow-500 font-bold"}>사용자의 관점에서 UI를 고려하며 개선</span>하는 것을 좋아합니다. </li>
					<li>코드의 재사용성을 높이는 것을 좋아합니다.</li>
					<li>지속적으로 새로운 활동을 통해 발전해나가고 있습니다.</li>
					<li>개인 블로그를 통해 공부한 내용을 정리하여 공유하고 있습니다.</li>
				</ul>
			</div>
		</div>
	);
}
