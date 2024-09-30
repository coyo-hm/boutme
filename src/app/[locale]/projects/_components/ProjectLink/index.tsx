import Link from "next/link";
import { ReactNode } from "react";
import { ProjectLinkType } from "@constants/projects";
import styles from "./projectLink.module.scss";

import IconHome from "@icons/home.svg";
import IconMoveLink from "@icons/link-external.svg";
import IconLink from "@icons/link.svg";

import LogoGithub from "@logos/github.svg";
import LogoNPM from "@logos/npm.svg";
import LogoStorybook from "@logos/storybook.svg";

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

interface Props extends ProjectLinkType {}

const ProjectLink = ({ type, url, label }: Props) => (
	<Link href={url} key={url} target={"_blank"} rel="noreferrer" className={`${styles.projectLink} ${styles[type]}`}>
		{LINK_ICON[type].icon}
		<span>{label ? label : LINK_ICON[type].label}</span>
		<IconMoveLink />
	</Link>
);

export default ProjectLink;
