"use client";

import { Button, Type, Typography, Size } from "@skiff-org/skiff-ui";

export default function PricingPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-16">
			<Typography size={Size.XXL} weight={700} style={{ color: "#0f172a" }}>
				Pricing
			</Typography>
			<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="rounded-2xl border border-gray-200 bg-white p-8">
					<Typography weight={700}>Free</Typography>
					<Typography color="secondary">Great for getting started</Typography>
					<Button type={Type.PRIMARY} style={{ marginTop: 12 }}>Get started</Button>
				</div>
				<div className="rounded-2xl border border-gray-200 bg-white p-8">
					<Typography weight={700}>Pro</Typography>
					<Typography color="secondary">More storage and features</Typography>
					<Button type={Type.PRIMARY} style={{ marginTop: 12 }}>Upgrade</Button>
				</div>
				<div className="rounded-2xl border border-gray-200 bg-white p-8">
					<Typography weight={700}>Teams</Typography>
					<Typography color="secondary">Built for organizations</Typography>
					<Button type={Type.PRIMARY} style={{ marginTop: 12 }}>Contact sales</Button>
				</div>
			</div>
		</main>
	);
}


