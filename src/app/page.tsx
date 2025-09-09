"use client";

import { Button, Type, Typography, InputField, Size } from "@skiff-org/skiff-ui";
import { useState, type ChangeEvent } from "react";

export default function Home() {
	const [email, setEmail] = useState("");

	return (
		<main className="min-h-screen bg-[#0b0f19] text-white">
			{/* Header */}
			<header className="w-full border-b border-white/10 bg-black/30 backdrop-blur">
				<div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
					<div className="flex items-center gap-2">
						<Typography weight={700} style={{ letterSpacing: -0.2 }}>Skiff Mail</Typography>
					</div>
					<nav className="hidden items-center gap-6 md:flex">
						<a href="/" className="text-gray-200 hover:text-white">Features</a>
						<a href="/(site)/pricing" className="text-gray-200 hover:text-white">Pricing</a>
						<a href="/(site)/security" className="text-gray-200 hover:text-white">Security</a>
						<a href="/(site)/mail" className="text-gray-200 hover:text-white">Mail</a>
						<a href="/(site)/drive" className="text-gray-200 hover:text-white">Drive</a>
						<a href="/(site)/pages" className="text-gray-200 hover:text-white">Pages</a>
						<a href="/(site)/calendar" className="text-gray-200 hover:text-white">Calendar</a>
					</nav>
					<div className="flex items-center gap-3">
						<Button type={Type.SECONDARY}>Sign in</Button>
						<Button type={Type.PRIMARY}>Get started</Button>
					</div>
				</div>
			</header>

			{/* Hero */}
			<section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24">
				<Typography size={Size.XXL} weight={600} align="center" style={{ color: "#ffffff" }}>
					Private, fast, delightful email
				</Typography>
				<Typography size={Size.LARGE} align="center" style={{ marginTop: 12, maxWidth: 760, color: "#cbd5e1" }}>
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
					<div className="rounded-xl border border-white/10 bg-white/5 p-5">
						<Typography weight={600} style={{ color: "#ffffff" }}>End-to-end encrypted</Typography>
						<Typography style={{ marginTop: 6, color: "#cbd5e1" }}>
							Your inbox is protected by default — only you can read your mail.
						</Typography>
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-5">
						<Typography weight={600} style={{ color: "#ffffff" }}>Lightning fast</Typography>
						<Typography style={{ marginTop: 6, color: "#cbd5e1" }}>
							Designed for speed with instant search and keyboard shortcuts.
						</Typography>
					</div>
					<div className="rounded-xl border border-white/10 bg-white/5 p-5">
						<Typography weight={600} style={{ color: "#ffffff" }}>Open & portable</Typography>
						<Typography style={{ marginTop: 6, color: "#cbd5e1" }}>
							Export anytime. Your data is yours.
						</Typography>
					</div>
				</div>

			{/* Expanded features */}
			<section className="mx-auto mt-20 w-full max-w-5xl px-6">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div className="rounded-2xl border border-white/10 bg-white/5 p-8">
						<Typography size={Size.XL} weight={700} style={{ color: "#ffffff" }}>Privacy-first by design</Typography>
						<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
							End-to-end encryption protects your emails, contacts, and settings. No trackers. No ads.
						</Typography>
					</div>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-8">
						<Typography size={Size.XL} weight={700} style={{ color: "#ffffff" }}>Seamless collaboration</Typography>
						<Typography style={{ marginTop: 10, color: "#cbd5e1" }}>
							Share securely, schedule with ease, and stay organized with labels and powerful filters.
						</Typography>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="mt-24 w-full border-t border-white/10 bg-black/30">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10">
					<Typography style={{ color: "#cbd5e1" }}>© {new Date().getFullYear()} Skiff Mail</Typography>
					<div className="flex items-center gap-4">
						<Button type={Type.SECONDARY}>Privacy</Button>
						<Button type={Type.SECONDARY}>Security</Button>
						<Button type={Type.SECONDARY}>Docs</Button>
					</div>
				</div>
			</footer>
			</section>
		</main>
	);
}
