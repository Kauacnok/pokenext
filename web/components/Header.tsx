import Image from 'next/image'

export function Header() {
	return (
		<header className="bg-gray-700 gap-2 flex h-20 justify-center items-center">
			<Image 
				src="/pokeball.png"
				width="40"
				height="40"
				alt="Pokebola"
			/>
			<h1 className="text-4xl text-white">Poke<span className="text-red-500">Next</span></h1>
		</header>
	)
}