import type { PokemonResponse, SimplePokemon } from "@/core/entities/pokemon";
import PokemonGrid from "@/presentation/components/features/pokemons/pokemon-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pokemons",
	description: "Pokemons page example",
};

async function getPokemons(limit = 10, offset = 0): Promise<SimplePokemon[]> {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
	);

	const data: PokemonResponse = await response.json();

	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split("/")[6],
		name: pokemon.name,
	}));

	return pokemons;
}

export default async function Page() {
	const pokemons = await getPokemons(151, 0);

	return (
		<div className="">
			<p>Pokemons</p>
			<PokemonGrid pokemons={pokemons} />
		</div>
	);
}
