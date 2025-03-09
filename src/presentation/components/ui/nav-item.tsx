"use client";

import { cn } from "@/lib/utils/tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem(props: {
	path: string;
	icon: React.ReactNode;
	title: string;
	subTitle: string;
}) {
	const pathname = usePathname();

	const isActive = pathname === props.path;

	return (
		<li>
			<Link
				className={cn(
					"inline-flex items-center gap-2 w-full px-4 py-2 rounded-lg transition-colors hover:bg-background-primary",
					isActive && "bg-linear-to-r from-primary to-primary-200",
				)}
				href={props.path}
			>
				<div>{props.icon}</div>
				<div className="flex flex-col">
					<span className={cn("text-sm", isActive && "font-bold")}>
						{props.title}
					</span>
					<span className="text-text-primary-200 text-xs">
						{props.subTitle}
					</span>
				</div>
			</Link>
		</li>
	);
}
