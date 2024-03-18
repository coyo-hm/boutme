import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import React from "react";
import "@styles/globals.css";


const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "COYO's Portfolio",
	description: "FE 개발자 COYO의 포토폴리오입니다!",
	icons:{
		icon:"./favicon.ico"
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className={font.className}>
				{children}
			</body>
		</html>
	);
}
