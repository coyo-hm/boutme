import { PropsWithChildren } from "react";
import styles from "./filebox.module.scss";

interface Props extends PropsWithChildren {
	className?: string;
	containerClassName?: string;
}

const FileBox = ({ className, containerClassName, children }: Props) => {
	return (
		<div className={`${containerClassName} ${styles.fileBox} `}>
			<ul className={styles.fileBoxHeader}>
				<li />
				<li />
				<li />
			</ul>
			<div className={className}>{children}</div>
		</div>
	);
};
export default FileBox;
