import styles from "./page.module.scss";
import { SKILLS } from "@constants/skills";
import Skill from "./_components/Skill";
import Tools from "./_components/Skill/Tools";

export default function SkillsPage() {
	return (
		<section className={styles.skillsPage}>
			<header className={styles.title}>SKILLS</header>
			<div className={styles.skills}>
				{SKILLS.map(({ key, ...rest }, index) => (
					<Skill key={key} {...rest} id={key} />
				))}
				<Tools/>
			</div>
		</section>
	);
}