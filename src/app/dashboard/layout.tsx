import Sidebar from "@/presentation/components/layout/sidebar";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/700.css";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="flex-1 p-4 ms-60">{children}</div>
		</div>
	);
}
