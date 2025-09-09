'use client';

import "~/styles/globals.css";

import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { AppThemeProvider } from "@skiff-org/skiff-ui";


const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>
				<AppThemeProvider>
					<TRPCReactProvider>{children}</TRPCReactProvider>
				</AppThemeProvider>
			</body>
		</html>
	);
}
