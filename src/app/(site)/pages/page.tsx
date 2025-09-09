"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function PagesPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Skiff Pages
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				Collaborative, secure docs with real-time editing and sharing.
			</Typography>
		</main>
	);
}


