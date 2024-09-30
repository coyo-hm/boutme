import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import styles from "./activeProject.module.scss";
import { ProjectType } from "@constants/projects";
import ProjectLink from "../ProjectLink";

import IconCalender from "@icons/calender.svg";
import IconPerson from "@icons/person.svg";

const projectVariants = {
	initial: {
		x: -20,
		opacity: 0
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			dumpling: 20
		}
	},
	hover: {
		scale: 1.02
	},
	exit: {
		opacity: 0
	}
};

interface Props extends ProjectType {
	currentIndex: number;
	onMouseOver: () => void;
	onMouseOut: () => void;
}

const ActiveProject = ({
	currentIndex,
	onMouseOver,
	onMouseOut,
	logo,
	title,
	id,
	links,
	sample,
	date,
	skills,
	details
}: Props) => {
	const t = useTranslations("projectsPage");
	return (
		<motion.div
			key={currentIndex}
			variants={projectVariants}
			initial={"initial"}
			animate={"animate"}
			exit={"exit"}
			whileHover={"hover"}
			className={styles.activeProject}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			id={title}
		>
			<h1 className={styles.title}>{logo ? logo : title}</h1>
			<div className={styles.info}>
				<span>
					<IconCalender />
					{date}
				</span>
				<span>
					<IconPerson />
					{t(`${id}.role`)}
				</span>
			</div>
			<hr />
			<div className={styles.content}>
				<div className={styles.summary}>&quot; {t(`${id}.summary`)} &quot;</div>
				<div className={styles.thumbnail}>
					<Image src={sample} alt={id} />
				</div>
				<div className={styles.links}>
					{links.map((link, i) => (
						<ProjectLink {...link} key={i} />
					))}
				</div>
				{details}
			</div>
			<hr />
			<ul className={styles.skills}>
				{skills.map((skill, key) => (
					<li key={key}>{skill}</li>
				))}
			</ul>
		</motion.div>
	);
};

export default ActiveProject;
