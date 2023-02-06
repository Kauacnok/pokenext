import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CardTypePokemon } from '../../components/CardTypePokemon'

interface pokemonProps {
    pokemon: {
        id: string | number,
        name: string,
        types: [
            {
                type: {name: string}
            }
        ],
        height: number,
        weight: number
    }
}

interface contextProps {
    params: { pokemonId: string }
}

function pokemonCard({ pokemon }:pokemonProps) {

    const urlImg = String(pokemon.id).padStart(3, "0")
    
    return (
        <>
            <Head>
                <meta name="title" content={`PokeNext - ${pokemon.name}`} />
                <meta name="description" content={`Conheça o pokémon ${pokemon.name} seu(s) elemento(s) seu peso e altura`} />
                <meta name="keywords" content={`Pokemon, Pokenext, 120 pokemons, site, Pokenext ${pokemon.name}`} />
                <meta name="author" content="Kauã C. N." />
                <meta property="og:image" content="https://i.imgur.com/u7Lt9h7.png" />
                <title>PokeNext</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="flex flex-col w-[100%] justify-center items-center">
                <h1 className="mt-4 bg-gray-700 px-5 py-2 text-3xl text-center text-white capitalize mb-4">{pokemon.name}</h1>
                <div className="border-2 border-gray-200 rounded mb-4">
                    <Image
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${urlImg}.png`}
                        width="200"
                        height="200"
                        alt={pokemon.name}
                    />    
                </div>
                
                <div className="flex justify-center w-[150px] gap-2 bg-red-500 text-white rounded">
                    <h3>Número:</h3>
                    <p>#{pokemon.id}</p>
                </div>
                <h3>Tipo:</h3>
                <div>
                    <div className="flex">
                        {pokemon.types.map((item, index: number) => (
                            <CardTypePokemon key={index} name={item.type.name} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="flex pr-2 gap-2 border-r text-center border-gray-200">
                        <h4 className="">Altura: </h4>
                        <p>{pokemon.height * 10}cm</p>
                    </div>
              
                    <div className="flex gap-2">
                        <h4>Peso: </h4>
                        <p>{pokemon.weight / 10}kg</p>
                    </div>
                </div>
                <div className="flex w-[80%] p-2 border-2 rounded border-gray-200 justify-around items-center">
                    { Number(pokemon.id) === 1 ? <ArrowLeft size={40} color="#E5E7EB" /> : <button type="button" className="hover:bg-gray-200 hover:rounded transition"><Link href={`/pokemon/${Number(pokemon.id) -1}`}><ArrowLeft size={40} /></Link></button>}
                    <p>Página: {pokemon.id}</p>
                    { Number(pokemon.id) === 119 ? <ArrowRight size={40} color="#E5E7EB" /> : <button type="button" className="hover:bg-gray-200 hover:rounded transition"><Link href={`/pokemon/${Number(pokemon.id) +1}`}><ArrowRight size={40} /></Link></button>}
                </div>
            </main>
         
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    const maxPokemons = 120
    const api = `https://pokeapi.co/api/v2/pokemon/`

    const res = await fetch(`${api}/?limit=${maxPokemons}&offset=1`)

    const data = await res.json()

    const paths = data.results.map((pokemon: pokemonProps, index: number) => {
        const indexPokemon = index + 1
        return {
            params: { pokemonId: indexPokemon.toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context: contextProps) {
    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data },
    }
}

export default pokemonCard