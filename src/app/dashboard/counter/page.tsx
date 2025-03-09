import CartCounter from "@/presentation/components/features/products/cart-counter";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Counter page",
	description: "Counter page example",
};

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center gap-3 w-full h-full">
			<p>Products in cart</p>
			<CartCounter value={10} />
		</div>
	);
}
