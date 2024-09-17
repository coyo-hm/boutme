import styles from "./skill.module.scss"
import IconGear from "@icons/gear.svg";
import { TOOLS_LIST } from "@constants/skills";

const Tools = () => {
	return <div className={styles.tools}>
		<h2 className={styles.title}>
			<IconGear />
			Tools
		</h2>
		<ul>
			{TOOLS_LIST.map(({ icon, label }) => (
				<li key={label} className={styles.icon}>
					{icon}
					{label}
				</li>
			))}
		</ul>
	</div>
}

export default Tools