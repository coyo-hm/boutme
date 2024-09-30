import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import LogoCOYOLOG from "@projects/coyo-log.svg";
import ImgCOYOLOG from "@projects/coyo-log-sample.png";
import ImgUI from "@projects/coyo-ui-sample.png";
import ImgBoard from "@projects/kanbanBoard-sample.gif";
import LogoDisboard from "@projects/disboard.png";
import ImgDisboard from "@projects/disboard-sample.png";

import BlogDetail from "@src/app/[locale]/projects/_components/ProjectDetails/BlogDetail";
import COYOUIDetail from "@src/app/[locale]/projects/_components/ProjectDetails/COYOUIDetail";
import KanbanBoardDetail from "@src/app/[locale]/projects/_components/ProjectDetails/KanbanBoardDetail";
import DisboardDetail from "@src/app/[locale]/projects/_components/ProjectDetails/DisboardDetail";

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
		details: <COYOUIDetail />,
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
		details: <KanbanBoardDetail />,
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
		details: <DisboardDetail />,
		sample: ImgDisboard
	}
];

export default PROJECTS;
