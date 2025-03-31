import type { Pokemon, PokemonResponse } from "@/core/entities/pokemon";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	try {
		const { id } = await params;
		const pokemon = await getPokemon(id);

		return {
			title: `#${pokemon.id} - ${pokemon.name}`,
			description: `Pokemon ${pokemon.name} details`,
		};
	} catch (error) {
		return {
			title: "Error 404 Not Found",
			description: "Could not find requested resource",
		};
	}
}

export const dynamicParams = true;

// export async function generateStaticParams() {
// 	const staticPokemons = Array.from({ length: 151 }).map((_, i) => `${i + 1}`);
// 	return staticPokemons.map((id) => ({
// 		id: id,
// 	}));
// }<

export async function generateStaticParams() {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
	const data: PokemonResponse = await response.json();

	return data.results.map((pokemon) => ({
		id: pokemon.name,
	}))
}

async function getPokemon(id: string): Promise<Pokemon> {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await response.json();
	return data;
}

type Props = {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({
	params,
}: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const pokemon = await getPokemon(id);

	return (
		<div className="flex flex-col items-center justify-center gap-2 min-h-[50svh]">
			<ViewTransition
				name={`pokemon-${pokemon.name}`}
				className="via-blur"
				exit="duration-100"
			>
				<figure>
					<Image
						src={
							pokemon.sprites.other?.dream_world.front_default ||
							pokemon.sprites.front_default
						}
						alt={pokemon.name}
						width={200}
						height={200}
					/>
				</figure>
				<h1 className="text-4xl capitalize font-semibold">{pokemon.name}</h1>
			</ViewTransition>
			<div className="flex gap-2">
				{pokemon.types.map((type) => (
					<div key={type.type.name} className="flex gap-1">
						<span key={type.type.name} className="capitalize">
							{type.type.name}
						</span>
					</div>
				))}
			</div>
			<div>
				<p>Height: {pokemon.height}</p>
				<p>Weight: {pokemon.weight}</p>
			</div>
		</div>
	);
}
