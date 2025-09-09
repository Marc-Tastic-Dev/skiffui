"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function DrivePage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Skiff Drive
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				Secure cloud storage with end-to-end encryption and effortless sharing.
			</Typography>
		</main>
	);
}


