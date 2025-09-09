"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function MailPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16">
			<Typography size={Size.XXL} weight={700} style={{ color: "#0f172a" }}>
				Skiff Mail
			</Typography>
			<Typography style={{ marginTop: 10, color: "#0f172a" }}>
				Privacy-first email with end-to-end encryption, powerful search, and delightful design.
			</Typography>
		</main>
	);
}


