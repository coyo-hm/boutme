import Link from "next/link";
import PageTitle from "@components/PageTitle";
import styles from "./abouts.module.scss";

import IconMail from "@assets/mail.svg";
import IconBlog from "@assets/star.svg";
import IconGithub from "@assets/github.svg";

const DESCRIPTION = [
	{ title: "FE 분야 뿐만 아니라 다양한 개발 분야를 깊이 있게 다져나가려고 노력하고 있습니다." },
	{
		title: (
			<>
				<span className={styles.highlight}>사용자의 관점에서 UI를 고려하며 개선</span>하는 것을 좋아합니다.
			</>
		),
		contents: [
			"개발 시에 주어진 화면만 그리는 것이 아닌 사용자 관점에서 개선되었으면 하는 것을 정리한 후 이를 논의해서 실제 서비스에 반영한 경험이 있습니다.",
			<>
				블로그 포스트 리스트를 볼 때 무한 스크롤도 좋지만, 포스트가 점차 많아지면 끝없는 스크롤로 인해 피로감을 호소할
				때가 있습니다. 이를 방지하고자{" "}
				<Link href={"https://coyo-hm.github.io/"} target={"_blank"} rel="noreferrer">
					개인 블로그
				</Link>
				에서는 무한스크롤 대신 페이지 네이션, 항상 떠 있는 목차와 더불어 바로 맨 위, 맨 아래로 이동하는 버튼을
				추가하였습니다.
			</>,
			<>
				코로나로 인해 비대면 강의를 진행하는 줌과 강의 공지를 위한 BlackBoard, 성적을 산출하는 학교 포탈 이 3가지
				서비스를 오가며 불편했던 경험을 녹여 <Link href={"#DISBOARD"}>DISBOARD</Link>라는 화상회의를 더한 통합 LMS
				플랫폼 프로젝트를 제작하였습니다.
			</>
		]
	},
	// {
	// 	title: "코드의 재사용성을 높이는 것을 좋아합니다."
	// },
	{
		title: (
			<>
				개발 과정 중에 불편함에 대해 <span className={styles.highlight}>자동화하여 개선</span>하려고 노력하고 있습니다.
			</>
		),
		contents: [
			<>
				git commit template과 commlint, semantice-release를 이용해서{" "}
				<Link href={"https://coyo-hm.github.io/series/commit-msg-management"} target={"_blank"} rel="noreferrer">
					커밋 메세지를 규격화한 후 이를 이용해 SemVer 관리와 ChangeLog와 npm 배포를 자동화한 경험
				</Link>
				이 있습니다.
			</>,
			<>
				<Link href={"https://coyo-hm.github.io/post/nextjs-large-page-data-warning"} target={"_blank"} rel="noreferrer">
					NextJs Large Page Data Warning을 js script를 작성
				</Link>
				하고{" "}
				<Link href={"https://coyo-hm.github.io/post/husky-git-hook"} target={"_blank"} rel="noreferrer">
					husky를 통해 자동화
				</Link>
				하여 해결하였습니다.
			</>
		]
	}
];

export default function Abouts() {
	return (
		<div id={"abouts"} className={styles.abouts}>
			<div>
				<PageTitle className={styles.title}>About me</PageTitle>
				<Link className={styles.mail} href="mailto:bsydwp@gmail.com">
					<IconMail width={24} height={24} />
					<span>bsydwp@gmail.com</span>
				</Link>
				<Link className={styles.blog} href={"https://coyo-hm.github.io/"} target={"_blank"} rel="noreferrer">
					<IconBlog width={24} height={24} />
					<span>BLOG</span>
				</Link>
				<Link className={styles.github} href={"https://github.com/coyo-hm"} target={"_blank"} rel="noreferrer">
					<IconGithub width={24} height={24} />
					<span>GITHUB</span>
				</Link>
				<ul className={styles.description}>
					{DESCRIPTION.map(({ title, contents }, descriptionIdx) => (
						<article key={descriptionIdx}>
							<h1>{title}</h1>
							{contents && (
								<ul>
									{contents.map((content, contentIdx) => (
										<li key={contentIdx}>{content}</li>
									))}
								</ul>
							)}
						</article>
					))}
				</ul>
			</div>
		</div>
	);
}
