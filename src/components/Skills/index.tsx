import Image from "next/image";

import styles from "./skills.module.scss";

import LogoReact from "@assets/react.png";
import LogoNextJs from "@assets/nextjs.svg";
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
	const toolList = [
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
		<div id={"skills"} className={styles.skills}>
			<div className={styles.content}>
				<h1 className={styles.title}>Skills</h1>
				<div className={styles.react}>
					<h1>
						<Image src={LogoReact} alt={"logo-react"} />
						React
					</h1>
					<ul>
						<li>실무에서 React를 이용해 설계부터 배포, VOC 대응까지 진행해본 경험이 있습니다.</li>
						<li>Redux, RTK, Recoil 등 다양한 상태 관리 라이브러리 사용 경험이 있습니다.</li>
					</ul>
				</div>
				<div className={styles.nextjs}>
					<h1>
						<LogoNextJs alt={"logo-nextjs"} />
						NextJs
					</h1>
					<ul>
						<li>NextJs를 통해 SSG 사이트를 생성한 경험이 있습니다. </li>
						<li>지금 이 포토폴리오와 블로그 모두 NextJs로 만들어진 사이트 입니다.</li>
					</ul>
				</div>
				<div className={styles.javaScript}>
					<h1>
						<Image src={LogoJavaScript} alt={"logo-javaScript"} />
						JavaScript
					</h1>
					<ul>
						<li>ES6 문법에 익숙해요.</li>
					</ul>
				</div>
				<div className={styles.typeScript}>
					<h1>
						<Image src={LogoTypeScript} alt={"logo-typeScript"} />
						TypeScript
					</h1>
					<ul>
						<li>TypeScript를 사용해서 다양한 프로젝트를 진행한 경험이 있습니다.</li>
					</ul>
				</div>
				<div className={styles.css}>
					<h1>
						<Image src={LogoCSS} alt={"logo-css"} />
						CSS
					</h1>
					<ul>
						<li>
							<span className={"text-[#C66395FF] font-semibold"}>scss</span>,{" "}
							<span className={"text-[#BF4F74] font-semibold"}>styled-components</span>,{" "}
							<span className={"text-[#D26AC2] font-semibold"}>emotion</span>,{" "}
							<span className={"text-[#0EA5E9] font-semibold"}>tailwind</span> 등 다양한 css 사용 경험이 있습니다.
						</li>
						<li>
							실무에서는 <span className={"text-[#C66395FF] font-semibold"}>scss</span>와
							<span className={"text-[#BF4F74] font-semibold"}>styled-components</span>,{" "}
							<span className={"text-[#E2F0FF] font-semibold"}>less</span>를 주로 사용하였습니다.
						</li>
						<li>
							블로그 등 다양한 개인 프로젝트에서는 <span className={"text-[#D26AC2] font-semibold"}>emotion</span>과{" "}
							<span className={"text-[#0EA5E9] font-semibold"}>tailwind</span>를 사용했습니다.
						</li>
					</ul>
				</div>
				<div className={styles.tools}>
					<h1>
						<IconGear />
						Tools
					</h1>
					{toolList.map(({ icon, label }) => (
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
