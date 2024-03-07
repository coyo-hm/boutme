export interface ProjectProps {
	title: string;
	date: string;
	skills: string[];
	website?: string;
	links: { type: "git" | "npm" | "notion" | "etc"; url: string }[];
	summary: string;
	details: string[];
}

export default function ProjectBox({}: ProjectProps) {
	return <div></div>;
}
