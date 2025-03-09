import Image from "next/image";
import NavItem from "../ui/nav-item";

const navItems = [
	{
		path: "/dashboard/home",
		icon: (
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
				<title>layout-grid</title>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				<path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				<path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				<path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			</svg>
		),
		title: "Dashboard",
		subTitle: "Overview",
	},
	{
		path: "/dashboard/counter",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
				className="icon icon-tabler icons-tabler-outline icon-tabler-calculator"
			>
				<title>calculator</title>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
				<path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
				<path d="M8 14l0 .01" />
				<path d="M12 14l0 .01" />
				<path d="M16 14l0 .01" />
				<path d="M8 17l0 .01" />
				<path d="M12 17l0 .01" />
				<path d="M16 17l0 .01" />
			</svg>
		),
		title: "Counter",
		subTitle: "Counter example",
	},
];

export default function Sidebar() {
	return (
		<aside className="w-60 min-h-screen p-4 border-e border-primary bg-background-primary-200">
			<nav className="flex flex-col gap-6">
				<h1 className="text-2xl font-bold">My dashboard</h1>
				<div className="flex items-center gap-2">
					<Image
						className="rounded-full outline-2 outline-primary"
						src="https://i.pravatar.cc/100"
						alt="Placeholder"
						width={40}
						height={40}
					/>
					<span className="font-bold text-sm">Jhon Bocanegra</span>
				</div>
				<ul className="flex flex-col gap-2">
					{navItems.map((item) => (
						<NavItem key={item.path} {...item} />
					))}
				</ul>
			</nav>
		</aside>
	);
}
