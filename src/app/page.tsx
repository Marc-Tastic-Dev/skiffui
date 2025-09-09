"use client";

import { Button, Type, Typography, InputField, Size } from "@skiff-org/skiff-ui";
import { useState, type ChangeEvent } from "react";

export default function Home() {
	const [email, setEmail] = useState("");

	return (
		<main className="min-h-screen bg-white text-black">
			<section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24">
				<Typography size={Size.XXL} weight={600} align="center">
					Private, fast, delightful email
				</Typography>
				<Typography size={Size.LARGE} color="secondary" align="center" style={{ marginTop: 12 }}>
					Meet your new secure email service. End-to-end encryption, powerful search, and a beautiful UI.
				</Typography>
				<div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row">
					<div className="w-full sm:w-auto sm:min-w-[340px]">
						<InputField
							value={email}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
							placeholder="Enter your email"
							fullWidth
						/>
					</div>
					<Button type={Type.PRIMARY} onClick={() => { /* TODO: hook signup */ }}>
						Get early access
					</Button>
				</div>
				<div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
					<div className="rounded-xl border border-gray-200 p-5">
						<Typography weight={600}>End-to-end encrypted</Typography>
						<Typography color="secondary" style={{ marginTop: 6 }}>
							Your inbox is protected by default — only you can read your mail.
						</Typography>
					</div>
					<div className="rounded-xl border border-gray-200 p-5">
						<Typography weight={600}>Lightning fast</Typography>
						<Typography color="secondary" style={{ marginTop: 6 }}>
							Designed for speed with instant search and keyboard shortcuts.
						</Typography>
					</div>
					<div className="rounded-xl border border-gray-200 p-5">
						<Typography weight={600}>Open & portable</Typography>
						<Typography color="secondary" style={{ marginTop: 6 }}>
							Export anytime. Your data is yours.
						</Typography>
					</div>
				</div>
			</section>
		</main>
	);
}
