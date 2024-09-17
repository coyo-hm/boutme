import styles from "./page.module.scss";
import { SKILLS } from "@constants/skills";
import Skill from "@components/skills/Skill";
import Tools from "@components/skills/Skill/Tools";

export default function SkillsPage() {
	return (
		<section className={styles.skillsPage}>
			<header className={"pageTitle"}>SKILLS</header>
			<div className={styles.skills}>
				{SKILLS.map(({ key, ...rest }, index) => (
					<Skill key={key} {...rest} id={key} />
				))}
				<Tools/>
			</div>
		</section>
	);
}