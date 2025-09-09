"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function SupportPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Support
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				Find answers and contact our team for help.
			</Typography>
		</main>
	);
}


