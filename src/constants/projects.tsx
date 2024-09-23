import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import LogoCOYOLOG from "@projects/coyo-log.svg";
import ImgCOYOLOG from "@projects/coyo-log-sample.png";
import ImgUI from "@projects/coyo-ui-sample.png";
import ImgBoard from "@projects/board-card-dnd.gif";
import LogoDisboard from "@projects/disboard.png";
import ImgDisboard from "@projects/disboard-sample.png";
import BlogDetail from "@components/projects/ProjectDetails/BlogDetail";

export type ProjectLinkType = {
	type: "home" | "git" | "npm" | "storybook" | "notion" | "etc";
	url: string;
	label?: string;
};

export type ProjectType = {
	id: string;
	logo?: ReactNode;
	sample: StaticImageData;
	title: string;
	date: string;
	role: string;
	skills: ReactNode[];
	links: ProjectLinkType[];
	// details: { img?: ReactNode; text?: string }[];
	details: ReactNode;
};

export const PROJECTS: ProjectType[] = [
	{
		logo: <LogoCOYOLOG height={32} width={"auto"} />,
		id: "blog",
		title: "blog",
		date: "2022.10 ~ current",
		role: "1인 진행",
		skills: [
			"NextJS",
			"TypeScript",
			"Tailwind",
			"Framer-Motion",
			"Gh-Pages",
			"Husky",
			"Commitlint",
			"Semantic-Release"
		],
		links: [
			{ type: "home", url: "https://coyo-hm.github.io/" },
			{
				type: "git",
				url: "https://github.com/coyo-hm/COYO-HM.github.io"
			}
		],
		details: <BlogDetail />,
		sample: ImgCOYOLOG
	},
	{
		id: "coyoui",
		title: "COYO-UI",
		date: "2024.2.11 ~ current",
		role: "1인 진행",
		skills: [
			"React",
			"TypeScript",
			"Emotion",
			"Storybook",
			"Chromatic",
			"Husky",
			"Commitlint",
			"Semantic-Release",
			"Vite"
		],
		links: [
			{
				type: "storybook",
				url: "https://main--65ae91d7cdf7712a838d310c.chromatic.com/"
			},
			{
				type: "git",
				url: "https://github.com/coyo-hm/coyo-ui"
			},
			{
				type: "npm",
				url: "https://www.npmjs.com/package/coyo-ui"
			}
		],
		details: [
			// "Storybook을 활용한 UI Kit 입니다.",
			// "husky + commlint + semantic-release 를 통해 커밋메세지를 통해 SemVer는 물론 Change-Log, Release Note 들을 자동으로 관리해주도록 해주었습니다."
		],
		sample: ImgUI
	},
	{
		id: "kanbanBoard",
		title: "📖 SIMPLE KANBAN BOARD",
		date: "2022.9.14 ~ 2022.9.16 & 2024.1.6 ~ current",
		role: "1인 진행",
		skills: [
			"React",
			"TypeScript",
			"Recoil",
			"Styled-components",
			"React-beautiful-dnd",
			"React-hook-form",
			"React-color",
			"React-helmet",
			"Gh-Pages"
		],
		links: [
			{ type: "home", url: "https://coyo-hm.github.io/Simple-Kanban-Board/" },
			{
				type: "git",
				url: "https://github.com/coyo-hm/Simple-Kanban-Board"
			}
		],
		details: [
			// "라이브러리를 이용해서 매끄러운 보드를 만들려고 노력했습니다.",
			// "react-hook-form을 이용해서 더욱 간편하고 효과적으로 입력을 관리하도록 했습니다.",
			// "사용자가 생성한 보드와 카드, 지정한 색상 정보는 localStorage에 저장해서 데이터가 유지되도록 했습니다."
		],
		sample: ImgBoard
	},
	{
		id: "disboard",
		title: "DISBOARD",
		logo: <Image src={LogoDisboard} alt={"logo-disboard"} />,
		date: "2021.3 ~ 2021.6",
		role: "5인 진행(AI 1명, BE 1명, FE 2명, MOBILE 1명)",
		skills: ["React", "TypeScript", "Styled-components", "Redux-Thunk", "Antd", "Chartjs"],
		links: [
			{
				type: "git",
				url: "https://github.com/13-teamZoom-sc21/Disboard_Web"
			},
			{
				type: "etc",
				label: "VIDEO",
				url: "https://softcon.ajou.ac.kr/works/works_prev.asp?uid=430&wTerm=2021-1"
			}
		],
		details: [
			// "React로 만든 첫번째 프로젝트로 강의 외의 모든 기능을 개발하였습니다.",
			// "Chartjs를 활용해서 학생과 강의자에게 이해도 차트를 보다 용이하게 제공하려고 노력했습니다."
		],
		sample: ImgDisboard
	}
];

export default PROJECTS;
