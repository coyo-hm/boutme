import Image from "next/image";

import LogoReact from "@logos/react.png";
import LogoJavaScript from "@logos/javaScript.png";
import LogoTypeScript from "@logos/typeScript.png";
import LogoCSS from "@logos/css.png";
import LogoGithub from "@logos/github.svg";
import LogoGit from "@logos/git.png";
import LogoJira from "@logos/jira.png";
import LogoConfluence from "@logos/confluence.png";
import LogoSlack from "@logos/slack.png";
import LogoNotion from "@logos/notion.webp";
import LogoFigma from "@logos/figma.png";
import LogoStorybook from "@logos/storybook.svg";

export const SKILLS = [
	// {
	// 	key: "nextjs",
	// 	icon: <LogoNextJs alt={"logo-nextjs"} />,
	// 	label: "NextJs",
	// 	description: [
	// 		"NextJs를 통해 SSG 사이트를 생성한 경험이 있습니다.",
	// 		"지금 이 포토폴리오와 블로그 모두 NextJs로 만들어진 사이트 입니다."
	// 	]
	// },
	{
		key: "react",
		icon: <Image src={LogoReact} alt={"logo-react"} />,
		label: "React",
		description: ["react.text1", "react.text2", "react.text3"]
	},
	// {
	// 	key: "gatsby",
	// 	icon: <Image alt={"logo-gatsby"} src={LogoGatsby} />,
	// 	label: "Gatsby",
	// 	description: [
	// 		"Gatsby를 통해 SSG 사이트를 생성한 경험이 있습니다.",
	// 		<>
	// 			이전 버전의 블로그 Gatsby로 만들어진 사이트입니다. 해당 코드는{" "}
	// 			<Link
	// 				target={"_blank"}
	// 				rel="noreferrer"
	// 				href={"https://github.com/coyo-hm/COYO-HM.github.io/tree/gatsby-backup"}
	// 				className={"text-[#C4B3D9] underline"}
	// 			>
	// 				블로그 gatsby-backup 브랜치
	// 			</Link>
	// 			에 백업되어 있습니다.
	// 		</>
	// 	]
	// },
	{
		key: "javaScript",
		icon: <Image src={LogoJavaScript} alt={"logo-javaScript"} />,
		label: "JavaScript",
		description: ["javaScript.text1", "javaScript.text2"]
	},
	{
		key: "typeScript",
		icon: <Image src={LogoTypeScript} alt={"logo-typeScript"} />,
		label: "TypeScript",
		description: ["typeScript.text1", "typeScript.text2"]
	},
	{
		key: "css",
		icon: <Image src={LogoCSS} alt={"logo-css"} />,
		label: "CSS",
		description: ["css.text1", "css.text2", "css.text3", "css.text4", "css.text5"]
	}
];

export const TOOLS_LIST = [
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
