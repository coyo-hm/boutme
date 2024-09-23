import styles from "./activities.module.scss";
import ACTIVITIES from "@constants/activities";
import Activity from "@components/activities/Activity";

const Activities = () => {
	return (
		<ul className={styles.activities}>
			{ACTIVITIES.map(item => (
				<Activity id={item} key={item} />
			))}
		</ul>
	);
};

export default Activities;
