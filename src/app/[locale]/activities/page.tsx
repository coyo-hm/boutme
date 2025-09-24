import { Metadata } from "next";

import styles from "./page.module.scss";
// import Careers from "@components/activities/Careers";
import Activities from "./_components/Activities";

export const metadata: Metadata = {
	title: "skills"
};

export default function ActivitiesCareersPage() {
	return (
		<div className={styles.activitiesPage}>

			{/*<Careers />*/}
			<header className={styles.title}>ACTIVITIES</header>
			<Activities />
		</div>
	);
}