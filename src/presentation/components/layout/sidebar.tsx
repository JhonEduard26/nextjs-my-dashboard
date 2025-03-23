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
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
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
	{
		path: "/dashboard/pokemons",
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
				<title>butterfly</title>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M12 18.176a3 3 0 1 1 -4.953 -2.449l-.025 .023a4.502 4.502 0 0 1 1.483 -8.75c1.414 0 2.675 .652 3.5 1.671a4.5 4.5 0 1 1 4.983 7.079a3 3 0 1 1 -4.983 2.25z" />
				<path d="M12 19v-10" />
				<path d="M9 3l3 2l3 -2" />
			</svg>
		),
		title: "Pokemons",
		subTitle: "Static generation",
	},
];

export default function Sidebar() {
	return (
		<aside className="fixed w-60 min-h-screen p-4 border-e border-primary bg-background-primary-200">
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
