import Sidebar from "@/presentation/components/layout/sidebar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="flex-1 p-4">{children}</div>
		</div>
	);
}
