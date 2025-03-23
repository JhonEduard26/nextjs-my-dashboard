import type { SimplePokemon } from "@/core/entities/pokemon";
import Image from "next/image";

export default function PokemonCard(props: { pokemon: SimplePokemon }) {
	const { pokemon } = props;

	return (
		<div
			key={pokemon.id}
			className="flex flex-col items-center gap-2 px-2 py-2 bg-background-primary-200 rounded-md"
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
		</div>
	);
}
