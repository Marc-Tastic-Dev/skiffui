"use client";

import { Typography, Size, Button, Type } from "@skiff-org/skiff-ui";

export default function DownloadPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Download
			</Typography>
			<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
				Get the app for iOS, Android, macOS, Windows, and Linux.
			</Typography>
			<div className="mt-8 flex gap-3">
				<Button type={Type.PRIMARY}>Download for macOS</Button>
				<Button type={Type.SECONDARY}>Other platforms</Button>
			</div>
		</main>
	);
}


