"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
	initial: {
		y: 50,
		opacity: 0,
	},
	animate: {
		y:0,
		opacity: 1,
	},
	exit: {
		y: 50,
		opacity: 0,
	}
};

export default function Template({ children }: { children: React.ReactNode }) {const key = usePathname();
	return (
		<AnimatePresence mode="wait">
			<motion.div key={key} variants={variants} initial={"initial"} animate={"animate"} exit={"exit"}  transition={{ type: "linear" , duration: 0.5}}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
