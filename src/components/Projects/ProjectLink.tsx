import Link from "next/link";
import { ReactNode } from "react";
import styles from "@components/Projects/projects.module.scss";
import IconHome from "@assets/home.svg";
import IconLink from "@assets/link.svg"
import LogoGithub from "@assets/github.svg";
import LogoNPM from "@assets/npm.svg";
import LogoStorybook from "@assets/storybook.svg";


export interface ProjectLinkProps {
	type: "home" | "git" | "npm" | "storybook" | "notion" | "etc";
	url: string;
	label?: string;
}

const LINK_ICON: { [key: string]: { icon: ReactNode; label?: string } } = {
	home: {
		icon: <IconHome />,
		label: "HOMEPAGE"
	},
	git: {
		icon: <LogoGithub />,
		label: "GITHUB"
	},
	npm: {
		icon: <LogoNPM />,
		label: "NPM"
	},
	storybook: {
		icon: <LogoStorybook />,
		label: "STORYBOOK"
	},
	etc: { icon: <IconLink /> }
};

export default function ProjectLink({ url, type, label }: ProjectLinkProps) {
	return (
		<Link href={url} key={url} target={"_blank"} rel="noreferrer" className={styles[type]}>
			{label ? label : LINK_ICON[type].label}
			{LINK_ICON[type].icon}
		</Link>
	);
}
