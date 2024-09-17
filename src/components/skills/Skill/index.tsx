import { ReactNode } from "react";
import styles from "./skill.module.scss";
import { useTranslations } from "next-intl";

interface Props {
	id: string;
	icon: ReactNode;
	label: string;
	description: string[];
}

const Skill = ({ id, icon, label, description }: Props) => {
	const t = useTranslations("skillsPage");
	return (
		<div className={`${styles.skill} ${styles[id]}`}>
			<h2 className={styles.title}>
				{icon}
				{label}
			</h2>
			<ul>
				{description.map((row, idx) => (
					<li key={idx}>
						{t.rich(row, {
							highlight: chunks => <span className={styles.highlight}>{chunks}</span>,
							tailwind: chunks => <span className={styles.tailwind}>{chunks}</span>,
							emotion: chunks => <span className={styles.emotion}>{chunks}</span>,
							scss: chunks => <span className={styles.scss}>{chunks}</span>,
							styledComponent: chunks => <span className={styles.styledComponent}>{chunks}</span>,
							less: chunks => <span className={styles.less}>{chunks}</span>,
						})}
					</li>
				))}
			</ul>
		</div>
	);
};
export default Skill;
