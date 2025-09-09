"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function PrivacyPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Privacy Policy
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				We respect your privacy. This page outlines what we collect and why.
			</Typography>
		</main>
	);
}


