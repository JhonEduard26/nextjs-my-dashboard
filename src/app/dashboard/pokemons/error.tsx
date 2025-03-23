"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col justify-center items-center gap-2 min-h-[80svh]">
			<h2 className="text-6xl">Error 500</h2>
			<p className="text-2xl">Something went wrong!</p>
			<button
				className="mt-5 px-4 py-2 rounded-lg bg-primary transition-colors cursor-pointer hover:bg-background-primary-300"
				type="button"
				onClick={() => reset()}
			>
				Try again
			</button>
		</div>
	);
}
