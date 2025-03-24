export const iconTypes = {
	dragon: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Dragon</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
		</svg>
	`,
	normal: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Normal</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
		</svg>
	`,
	fire: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Fire</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
		</svg>
	`,
	grass: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Grass</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
			<path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
		</svg>
	`,
	ghost: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Ghost</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
			<path d="M10 10h.01" />
			<path d="M14 10h.01" />
		</svg>
	`,
	poison: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Poison</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 4c4.418 0 8 3.358 8 7.5c0 1.901 -.755 3.637 -2 4.96l0 2.54a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2.54c-1.245 -1.322 -2 -3.058 -2 -4.96c0 -4.142 3.582 -7.5 8 -7.5z" />
			<path d="M10 17v3" />
			<path d="M14 17v3" />
			<path d="M9 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M15 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
		</svg>
	`,
	electric: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Electric</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
		</svg>
	`,
	physic: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Physic</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 12.057a1.9 1.9 0 0 0 .614 .743c1.06 .713 2.472 .112 3.043 -.919c.839 -1.513 -.022 -3.368 -1.525 -4.08c-2 -.95 -4.371 .154 -5.24 2.086c-1.095 2.432 .29 5.248 2.71 6.246c2.931 1.208 6.283 -.418 7.438 -3.255c1.36 -3.343 -.557 -7.134 -3.896 -8.41c-3.855 -1.474 -8.2 .68 -9.636 4.422c-1.63 4.253 .823 9.024 5.082 10.576c4.778 1.74 10.118 -.941 11.833 -5.59a9.354 9.354 0 0 0 .577 -2.813" />
		</svg>
	`,
	steel: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Steel</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
			<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
		</svg>
	`,
	water: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Water</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
		</svg>
	`,
	fight: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Fight</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5" />
			<path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5" />
			<path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5" />
			<path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
		</svg>
	`,
	fly: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Fly</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
			<path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
			<path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
		</svg>
	`,
	bug: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Bug</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M9 9v-1a3 3 0 0 1 6 0v1" />
			<path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
			<path d="M3 13l4 0" />
			<path d="M17 13l4 0" />
			<path d="M12 20l0 -6" />
			<path d="M4 19l3.35 -2" />
			<path d="M20 19l-3.35 -2" />
			<path d="M4 7l3.75 2.4" />
			<path d="M20 7l-3.75 2.4" />
		</svg>
	`,
	snow: `
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Snow</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 4l2 1l2 -1" />
			<path d="M12 2v6.5l3 1.72" />
			<path d="M17.928 6.268l.134 2.232l1.866 1.232" />
			<path d="M20.66 7l-5.629 3.25l.01 3.458" />
			<path d="M19.928 14.268l-1.866 1.232l-.134 2.232" />
			<path d="M20.66 17l-5.629 -3.25l-2.99 1.738" />
			<path d="M14 20l-2 -1l-2 1" />
			<path d="M12 22v-6.5l-3 -1.72" />
			<path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
			<path d="M3.34 17l5.629 -3.25l-.01 -3.458" />
			<path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
			<path d="M3.34 7l5.629 3.25l2.99 -1.738" />
		</svg>
	`,
};
