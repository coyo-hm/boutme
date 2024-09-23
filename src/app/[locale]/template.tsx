"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
	initial: {
		scale: 0.1,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
	},
	exit: {
		scale: 0.1,
		opacity: 0,
	}
};

export default function Template({ children }: { children: React.ReactNode }) {const key = usePathname();
	return (
		<AnimatePresence mode="wait">
			<motion.div key={key} variants={variants} initial={"initial"} animate={"animate"} exit={"exit"}  transition={{ type: "linear" , duration: 1}}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
