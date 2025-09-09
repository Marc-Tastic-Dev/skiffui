"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function TermsPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Terms of Service
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				Please review the terms that govern your use of our services.
			</Typography>
		</main>
	);
}


