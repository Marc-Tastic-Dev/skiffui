"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function SecurityPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Security
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				Learn about encryption, keys, and how we keep your data safe.
			</Typography>
		</main>
	);
}


