import { useTranslations } from "next-intl";
import styles from "./activity.module.scss";

interface Props {
	id: string;
}

const Activity = ({ id }: Props) => {
	const t = useTranslations("activitiesPage");
	return (
		<li className={styles.activity}>
			<h1 className={styles.name}>{t(`${id}.name`)}</h1>
			<span className={styles.position}>{t(`${id}.position`)}</span>
			<span className={styles.date}>{t(`${id}.date`)}</span>
			<p className={styles.description}>{t(`${id}.description`)}</p>

		</li>
	);
};
export default Activity;
