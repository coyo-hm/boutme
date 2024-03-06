import styles from "./home.module.scss";

export default function Home() {
	return (
		<div className={styles.home} id={"home"}>
			<div>
				<h1 className={styles.job}>FRONTEND DEVELOPER</h1>
				<h1 className={styles.name}>DAYEON YOON</h1>
				<div className={styles.greeting} />
			</div>
		</div>
	);
}
