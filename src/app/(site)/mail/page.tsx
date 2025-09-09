"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function MailPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Skiff Mail
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				Privacy-first email with end-to-end encryption, powerful search, and delightful design.
			</Typography>
		</main>
	);
}


