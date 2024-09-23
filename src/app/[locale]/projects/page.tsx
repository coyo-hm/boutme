import styles from "./page.module.scss";
import ProjectsCarousel from "@components/projects/ProjectsCarousel";
import PROJECTS from "@constants/projects";

export default function ProjectsPage() {
	return (
		<section className={styles.projectsPage}>
			<header className={styles.title}>PROJECTS</header>
			<ProjectsCarousel projects={PROJECTS} />
		</section>
	);
}