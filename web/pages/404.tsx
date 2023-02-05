import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function PageNotFound() {
	return (
		<>
			<Header />
			<main className="flex flex-col gap-10 justify-center items-center h-[80vh]">
                <h2 className="text-4xl text-center">Ops... essa página não existe (Not Found 404)</h2>
                <p className="border-2 border-blue-500 p-2 rounded hover:bg-blue-500 hover:text-white transition"><Link href="/">Voltar para a página inicial</Link></p>
                <p className="border-2 border-blue-500 p-2 rounded hover:bg-blue-500 hover:text-white transition"><Link href="/pokemon/1">Acessar lista de pokemons</Link></p>
            </main>
			<Footer />
		</>
	)
}

export default PageNotFound