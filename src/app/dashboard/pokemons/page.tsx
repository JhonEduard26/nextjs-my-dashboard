import type { PokemonResponse, SimplePokemon } from "@/core/entities/pokemon";
import type { Metadata } from "next";
import Image from "next/image";

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
			<div className="flex flex-col">
				{pokemons.map((pokemon) => (
					<div key={pokemon.id}>
						<Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
							alt={pokemon.name}
							width={100}
							height={100}
							unoptimized
						/>
					</div>
				))}
			</div>
		</div>
	);
}
