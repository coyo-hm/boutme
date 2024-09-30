import Image from "next/image";
import ProjectBox from "@src/app/[locale]/projects/_components/ProjectBox";
import styles from "./projects.module.scss";

import LogoCOYOLOG from "@projects/coyo-log.svg";
import ImgCOYOLOG from "@projects/coyo-log-sample.png";
import ImgBoard from "@projects/board-card-dnd.gif";
import ImgUI from "@projects/coyo-ui-sample.png";
import LogoDisboard from "@projects/disboard.png";
import ImgDisboard from "@projects/disboard-sample.png";


export default function Projects() {
	const PROJECT_DATA = [
		{
			logo: <LogoCOYOLOG height={32} width={"auto"} />,
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
			summary: <>개인 공부한 내용 혹은 스터디한 내용들을 정리하여 공유하는 개인 블로그입니다.</>,
			details: [
				"NextJS + Tailwind 로 제작한 SSG 사이트입니다.",
				"Version 1은 Gatsby로 개발되어 있으며 브랜치에 따로 아카이빙하고 있습니다. 빌드 타임 개선을 위해 nextjs로 migration을 진행하였습니다.",
				"commit message 관리에 필요성으로 인해 husky + commlint + semantic-release 를 통해 커밋메세지를 관리하고 더불어 SemVer을 메세지에 따라 자동으로 업데이트 해주도록 설정하였습니다.",
				"다양한 애니메이션을 활용하여 지루하지 않는 사이트를 만들려고 노력했습니다.",
				"사용자 입장에서 블로그에 꼭 추가하고 싶었던 기능들을 추가하려고 했습니다."
			],
			sample: ImgCOYOLOG
		},
		{
			title: "COYO-UI",
			date: "2024.2.11 ~ current",
			role: "1인 진행",
			skills: ["React", "TypeScript", "Emotion", "Storybook", "Chromatic", "Husky", "Commitlint", "Semantic-Release", "Vite"],
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
			summary:
				"프로젝트 진행 중 자주 사용할 것 같은 ui component 를 생성해 둔 UI Kit 입니다. 블로그나 다른 프로젝트 중에 자주 사용하는 애니메이션을 추가하고 있습니다.",
			details: [
				"Storybook을 활용한 UI Kit 입니다.",
				"husky + commlint + semantic-release 를 통해 커밋메세지를 통해 SemVer는 물론 Change-Log, Release Note 들을 자동으로 관리해주도록 해주었습니다."
			],
			sample: ImgUI
		},
		{
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
			summary: "노션 보드를 React-beautiful-dnd를 이용해서 클론 코딩한 칸반 보드 사이트입니다. ",
			details: [
				"라이브러리를 이용해서 매끄러운 보드를 만들려고 노력했습니다.",
				"react-hook-form을 이용해서 더욱 간편하고 효과적으로 입력을 관리하도록 했습니다.",
				"사용자가 생성한 보드와 카드, 지정한 색상 정보는 localStorage에 저장해서 데이터가 유지되도록 했습니다."
			],
			sample: ImgBoard
		},
		{
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
			summary: "코로나의 여파로 증가된 비대면 강의에 대한 이해를 돕는 조직적인 LMS 서비스 입니다.",
			details: [
				"React로 만든 첫번째 프로젝트로 강의 외의 모든 기능을 개발하였습니다.",
				"Chartjs를 활용해서 학생과 강의자에게 이해도 차트를 보다 용이하게 제공하려고 노력했습니다."
			],
			sample: ImgDisboard
		}
	];

	return (
		<div id={"projects"} className={styles.projects}>
			<div className={styles.content}>
				{/*<PageTitle className={styles.title}>Projects</PageTitle>*/}
				<div className={styles.projectsContainer}>
					{PROJECT_DATA.map(project => (
						<ProjectBox {...project} key={project.title}  />
					))}
				</div>
			</div>
		</div>
	);
}
