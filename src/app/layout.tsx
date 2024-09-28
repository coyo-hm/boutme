import { Metadata } from "next";
import React from "react";
import "@styles/globals.css";

export const metadata: Metadata = {
	title: "COYO's Portfolio",
	description: "Portfolio of FE developer COYO!",
	icons:{
		icon:"./favicon.ico"
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
