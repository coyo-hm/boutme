import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import ProjectLink, { ProjectLinkProps } from "@components/Projects/ProjectLink";
import styles from "./projects.module.scss";

import IconCalender from "@assets/calender.svg";
import IconPerson from "@assets/person.svg";
import IconCheck from "@assets/check.svg";

export interface ProjectProps {
	logo?: ReactNode;
	sample: StaticImageData;
	title: string;
	date: string;
	role: string;
	skills: string[];
	links: ProjectLinkProps[];
	summary: ReactNode;
	details: string[];
}

export default function ProjectBox({ logo, title, date, role, skills, links, summary, details, sample }: ProjectProps) {
	return (
		<div className={styles.projectContainer}>
			<ul className={styles.projectLinks}>
				{links.map((link, idx) => (
					<ProjectLink {...link} key={idx} />
				))}
			</ul>
			<div className={styles.projectBox}>
				<h1 className={styles.projectTitle}>{logo ? logo : title}</h1>
				<div className={styles.projectImage}>
					<Image src={sample} alt={title} />
				</div>
				<div className={styles.projectInfo}>
					<div className={styles.icon}>
						<IconCalender />
						{date}
					</div>
					<div className={styles.icon}>
						<IconPerson />
						{role}
					</div>
					<p className={styles.summary}>{summary}</p>
					<ul className={styles.skills}>
						{skills.map(skill => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
					<hr />
					<ul className={styles.details}>
						{details.map((detail, key) => (
							<li key={key}>
								<IconCheck />
								{detail}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
