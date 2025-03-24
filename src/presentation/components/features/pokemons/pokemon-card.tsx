import type { SimplePokemon } from "@/core/entities/pokemon";
import Image from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function PokemonCard(props: { pokemon: SimplePokemon }) {
	const { pokemon } = props;

	return (
		<div
			key={pokemon.id}
			className="flex flex-col items-center gap-2 px-2 py-2 bg-background-primary-200 rounded-md"
		>
			<ViewTransition
				name={`pokemon-${pokemon.id}`}
				className="via-blur"
				exit="duration-100"
			>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
					alt={pokemon.name}
					width={100}
					height={100}
					className="object-contain w-[100px] h-[100px]"
					unoptimized
				/>
				<p className="capitalize">{pokemon.name}</p>

				<Link href={`/dashboard/pokemon/${pokemon.id}`}>More info</Link>
			</ViewTransition>
		</div>
	);
}
