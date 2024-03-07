import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import React from "react";
import "@styles/globals.css";


const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dayeon's Portfolio",
	description: "FE 개발자 윤다연의 포토폴리오입니다!"
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
