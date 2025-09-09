"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function SecurityPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16">
			<Typography size={Size.XXL} weight={700} style={{ color: "#0f172a" }}>
				Security
			</Typography>
			<Typography color="secondary" style={{ marginTop: 10 }}>
				Learn about encryption, keys, and how we keep your data safe.
			</Typography>
		</main>
	);
}


