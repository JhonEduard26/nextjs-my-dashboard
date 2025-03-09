"use client";

import { useState } from "react";

export default function CartCounter(props: { value: number }) {
	const [value, setValue] = useState(props.value);

	return (
		<div className="flex flex-col items-center gap-6">
			<span className="text-8xl">{value}</span>
			<div className="flex gap-2">
				<button
					type="button"
					className="px-3 py-2 bg-primary text-text-primary rounded-xl w-full min-w-24 cursor-pointer transition-colors hover:bg-primary-200"
					onClick={() => setValue(value + 1)}
				>
					+1
				</button>
				<button
					type="button"
					className="px-3 py-2 bg-primary text-text-primary rounded-xl w-full min-w-24 cursor-pointer transition-colors hover:bg-primary-200"
					onClick={() => setValue(value - 1)}
				>
					-1
				</button>
			</div>
		</div>
	);
}
