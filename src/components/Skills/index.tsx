import Image from "next/image";
import Link from "next/link";

import styles from "./skills.module.scss";

import LogoReact from "@assets/react.png";
import LogoNextJs from "@assets/nextjs.svg";
import LogoGatsby from "@assets/gatsby.png";
import LogoJavaScript from "@assets/javaScript.png";
import LogoTypeScript from "@assets/typeScript.png";
import LogoCSS from "@assets/css.png";
import IconGear from "@assets/gear.svg";
import LogoGithub from "@assets/github.svg";
import LogoGit from "@assets/git.png";
import LogoJira from "@assets/jira.png";
import LogoConfluence from "@assets/confluence.png";
import LogoSlack from "@assets/slack.png";
import LogoNotion from "@assets/notion.webp";
import LogoFigma from "@assets/figma.png";
import LogoStorybook from "@assets/storybook.svg";

export default function Skills() {
	const SKILLS_LIST = [
		{
			key: "nextjs",
			icon: <LogoNextJs alt={"logo-nextjs"} />,
			label: "NextJs",
			description: [
				"NextJs를 통해 SSG 사이트를 생성한 경험이 있습니다.",
				"지금 이 포토폴리오와 블로그 모두 NextJs로 만들어진 사이트 입니다."
			]
		},
		{
			key: "react",
			icon: <Image src={LogoReact} alt={"logo-react"} />,
			label: "React",
			description: [
				"실무에서 React를 이용해 설계부터 배포, VOC 대응까지 진행해본 경험이 있습니다.",
				"Redux, RTK, Recoil 등 다양한 상태 관리 라이브러리 사용 경험이 있습니다."
			]
		},
		{
			key: "gatsby",
			icon: <Image alt={"logo-gatsby"} src={LogoGatsby} />,
			label: "Gatsby",
			description: [
				"Gatsby를 통해 SSG 사이트를 생성한 경험이 있습니다.",
				<>
					이전 버전의 블로그 Gatsby로 만들어진 사이트입니다. 해당 코드는{" "}
					<Link
						target={"_blank"}
						rel="noreferrer"
						href={"https://github.com/coyo-hm/COYO-HM.github.io/tree/gatsby-backup"}
						className={"text-[#C4B3D9] underline"}
					>
						블로그 gatsby-backup 브랜치
					</Link>
					에 백업되어 있습니다.
				</>
			]
		},
		{
			key: "javaScript",
			icon: <Image src={LogoJavaScript} alt={"logo-javaScript"} />,
			label: "JavaScript",
			description: ["ES6 문법에 익숙해요.", "node.js 환경에서 js를 이용해서 다양한 과제를 수행한 경험이 있습니다."]
		},
		{
			key: "typeScript",
			icon: <Image src={LogoTypeScript} alt={"logo-typeScript"} />,
			label: "TypeScript",
			description: [
				"TypeScript를 사용해서 다양한 프로젝트를 진행하여 실제 서비스에 배포한 경험이 있습니다.",
				"javascript에서 typeScript로 주도적으로 migration을 진행한 경험이 있습니다."
			]
		},
		{
			key: "css",
			icon: <Image src={LogoCSS} alt={"logo-css"} />,
			label: "CSS",
			description: [
				<>
					<span className={"text-[#C66395FF] font-semibold"}>scss</span>,{" "}
					<span className={"text-[#BF4F74] font-semibold"}>styled-components</span>,{" "}
					<span className={"text-[#D26AC2] font-semibold"}>emotion</span>,{" "}
					<span className={"text-[#0EA5E9] font-semibold"}>tailwind</span> 등 다양한 css 사용 경험이 있습니다.
				</>,
				<>
					실무에서는 <span className={"text-[#C66395FF] font-semibold"}>scss</span>와{" "}
					<span className={"text-[#BF4F74] font-semibold"}>styled-components</span>,{" "}
					<span className={"text-[#E2F0FF] font-semibold"}>less</span>를 주로 사용하였습니다.
				</>,
				<>
					블로그 등 다양한 개인 프로젝트에서는 <span className={"text-[#D26AC2] font-semibold"}>emotion</span>과{" "}
					<span className={"text-[#0EA5E9] font-semibold"}>tailwind</span>를 사용했습니다.
				</>
			]
		}
	];

	const TOOLS_LIST = [
		{ icon: <LogoGithub />, label: "GitHub" },
		{
			icon: <Image src={LogoGit} alt={"git"} />,
			label: "Git"
		},
		{ icon: <Image src={LogoJira} alt={"jira"} />, label: "Jira" },
		{ icon: <Image src={LogoConfluence} alt={"confluence"} />, label: "Confluence" },
		{ icon: <Image src={LogoSlack} alt={"slack"} />, label: "Slack" },
		{ icon: <Image src={LogoNotion} alt={"notion"} />, label: "Notion" },
		{ icon: <Image src={LogoFigma} alt={"figma"} />, label: "Figma" },
		{ icon: <LogoStorybook alt={"storybook"} />, label: "Storybook" }
	];

	return (
		<div className={styles.skills} id={"skills"}>
			<div className={styles.content}>
				<h1 className={styles.title}>Skills</h1>
				{SKILLS_LIST.map(({ key, icon, label, description }) => (
					<div className={styles[key]} key={key}>
						<h1>
							{icon}
							{label}
						</h1>
						<ul>
							{description.map((row, idx) => (
								<li key={idx}>{row}</li>
							))}
						</ul>
					</div>
				))}
				<div className={styles.tools}>
					<h1>
						<IconGear />
						Tools
					</h1>
					{TOOLS_LIST.map(({ icon, label }) => (
						<div key={label} className={styles.icon}>
							{icon}
							{label}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
