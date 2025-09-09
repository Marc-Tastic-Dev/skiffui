"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function CalendarPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Skiff Calendar
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				A private, fast calendar to plan and share securely.
			</Typography>
		</main>
	);
}


