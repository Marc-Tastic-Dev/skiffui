"use client";

import { Button, Type, Typography, Size } from "@skiff-org/skiff-ui";

export default function PricingPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16 text-white">
			<Typography size={Size.XXL} weight={700} style={{ color: "#ffffff" }}>
				Pricing
			</Typography>
			<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-8">
					<Typography weight={700} style={{ color: "#ffffff" }}>Free</Typography>
					<Typography style={{ color: "#cbd5e1" }}>Great for getting started</Typography>
					<Button type={Type.PRIMARY} style={{ marginTop: 12 }}>Get started</Button>
				</div>
				<div className="rounded-2xl border border-white/10 bg-white/5 p-8">
					<Typography weight={700} style={{ color: "#ffffff" }}>Pro</Typography>
					<Typography style={{ color: "#cbd5e1" }}>More storage and features</Typography>
					<Button type={Type.PRIMARY} style={{ marginTop: 12 }}>Upgrade</Button>
				</div>
				<div className="rounded-2xl border border-white/10 bg-white/5 p-8">
					<Typography weight={700} style={{ color: "#ffffff" }}>Teams</Typography>
					<Typography style={{ color: "#cbd5e1" }}>Built for organizations</Typography>
					<Button type={Type.PRIMARY} style={{ marginTop: 12 }}>Contact sales</Button>
				</div>
			</div>
		</main>
	);
}


