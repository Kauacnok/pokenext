import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Link from 'next/link'

function Home() {
    return (
        <>
            <Head>
                <meta name="title" content="PokeNext" />
                <meta name="description" content="Conheça os 120 pokemons registrados no site" />
                <meta name="keywords" content="Pokemon, Pokenext, 120 pokemons, site" />
                <meta name="author" content="Kauã C. N." />
                <meta property="og:image" content="https://i.imgur.com/u7Lt9h7.png" />
                <title>PokeNext</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="flex flex-col gap-40 justify-center items-center h-[80vh]">
                <h2 className="text-4xl">Bem vindo ao Poke<span className="text-red-500">Next</span></h2>
                <p className="border-2 border-blue-500 p-2 rounded hover:bg-blue-500 hover:text-white transition"><Link href="/pokemon/1">Acessar lista de pokemons</Link></p>
            </main>
            

            <Footer />
        </>
    )
}

export default Home
