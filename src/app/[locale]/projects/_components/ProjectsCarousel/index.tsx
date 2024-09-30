"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./projectsCarousel.module.scss";
import { ProjectType } from "@constants/projects";
import ActiveProject from "../ActiveProject";

const INTERVAL_TIME = 4000;

const indexVariants = {
	initial: {
		backgroundColor: "rgb(0,0,0)"
	},
	animate: {
		backgroundColor: "rgb(0, 110, 51)",
		// scale: 1.2,
		transition: { duration: 0.2 }
	},
	hover: {
		// scale: 1.2,
		transition: { duration: 0.2 }
	}
};

interface Props {
	projects: ProjectType[];
}

const ProjectsCarousel = ({ projects }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const intervalRef = useRef<NodeJS.Timer>();

	const onMouseOverProject = () => {
		setIsPaused(true);
	};

	const onMouseOut = () => {
		setIsPaused(false);
	};

	const intervalCallback = useCallback(
		() => setCurrentIndex(prev => (prev + 1 === projects.length ? 0 : prev + 1)),
		[projects]
	);

	useEffect(() => {
		if (isPaused) {
			clearInterval(intervalRef.current as any);
		} else {
			intervalRef.current = setInterval(intervalCallback, INTERVAL_TIME);
		}
		return () => clearInterval(intervalRef.current as any);
	}, [intervalCallback, isPaused]);

	return (
		<div className={styles.projectsCarousel}>
			<div className={styles.projectsIndex}>
				{projects.map((_, i) => (
					<motion.button
						key={`project_idx_${i}`}
						variants={indexVariants}
						initial={"initial"}
						animate={currentIndex === i ? "animate" : ""}
						whileHover={"hover"}
						onClick={() => setCurrentIndex(i)}
					>
						{i + 1}
					</motion.button>
				))}
			</div>
			<div className={styles.activeProject}>
				<AnimatePresence>
					<ActiveProject
						{...projects[currentIndex]}
						currentIndex={currentIndex}
						onMouseOut={onMouseOut}
						onMouseOver={onMouseOverProject}
					/>
				</AnimatePresence>
			</div>
		</div>
	);
};
export default ProjectsCarousel;
