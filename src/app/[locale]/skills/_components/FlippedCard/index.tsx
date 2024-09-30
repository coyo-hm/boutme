import { ReactNode } from "react";

import styles from "./flippedCard.module.scss";

interface Props {
	// frontElement: ReactNode;
	// backElement: ReactNode;
	id: string;
	icon: ReactNode;
	label: string;
	description: string[];
}

const FlippedCard = ({ id, icon, label, description }: Props) => {
	return (
		<div className={`${styles.flippedCard} ${styles[id]}`}>
			<div className={styles.inner}>
				<div className={styles.front}>
					{icon}
					<h2>{label}</h2>
				</div>
				<div className={styles.back}>{description}</div>
			</div>
		</div>
	);
};
export default FlippedCard;
