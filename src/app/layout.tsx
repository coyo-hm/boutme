import { Metadata } from "next";
import React from "react";
import "@styles/globals.css";

export const metadata: Metadata = {
	title: { template: "COYO | %s", default: "COYO's Portfolio" },
	applicationName: "COYO's Portfolio",
	description: "Portfolio of FE developer COYO!",
	referrer: "origin-when-cross-origin",
	generator: "NextJS",
	authors: {
		name: "coyo",
		url: "https://github.com/coyo-hm"
	},
	creator: "coyo",
	publisher: "coyo",
	icons: {
		icon: "./favicon.ico"
	},
	metadataBase: new URL("https://bouts.vercel.app"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "en",
			"ko-KR": "ko"
		}
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
