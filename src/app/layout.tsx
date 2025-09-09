'use client';

import "~/styles/globals.css";

import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { AppThemeProvider, useTheme } from "@skiff-org/skiff-ui";
import { useEffect } from "react";


const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

function ThemeBootstrapper() {
	const { setStoredTheme } = useTheme() as { setStoredTheme: (name: string) => void };
	useEffect(() => {
		setStoredTheme("DARK");
	}, [setStoredTheme]);
	return null;
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>
				<AppThemeProvider>
					<ThemeBootstrapper />
					<TRPCReactProvider>{children}</TRPCReactProvider>
				</AppThemeProvider>
			</body>
		</html>
	);
}
