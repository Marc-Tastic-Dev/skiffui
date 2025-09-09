"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function AboutPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				About
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				Our mission is to make private, delightful communication accessible to everyone.
			</Typography>
		</main>
	);
}


