"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function DrivePage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16">
			<Typography size={Size.XXL} weight={700} style={{ color: "#0f172a" }}>
				Skiff Drive
			</Typography>
			<Typography color="secondary" style={{ marginTop: 10 }}>
				Secure cloud storage with end-to-end encryption and effortless sharing.
			</Typography>
		</main>
	);
}


