import type { SimplePokemon } from "@/core/entities/pokemon";
import PokemonCard from "./pokemon-card";

export default function PokemonGrid(props: { pokemons: SimplePokemon[] }) {
	return (
		<div className="flex flex-row flex-wrap gap-5">
			{props.pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
}
