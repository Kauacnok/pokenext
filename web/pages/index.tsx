import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Link from 'next/link'

function Home() {
    return (
        <>
            <Head>
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
