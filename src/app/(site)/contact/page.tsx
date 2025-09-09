"use client";

import { Typography, Size } from "@skiff-org/skiff-ui";

export default function ContactPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Contact
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				Reach out to our team for partnerships, press, or support.
			</Typography>
		</main>
	);
}


