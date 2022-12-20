import classNames from 'classnames'

interface CardTypePokemonProps {
	name: string
}

export function CardTypePokemon({ name }: CardTypePokemonProps) {
	return (
		<span
            className={classNames("px-10 py-2 mr-2 capitalize text-white text-center rounded", {
            	"bg-[#aa9]": name === "normal",
            	"bg-[#f42]": name === "fire",
            	"bg-[#39f]": name === "water",
            	"bg-[#fc3]": name === "eletric",
            	"bg-[#7c5]": name === "grass",
            	"bg-[#6cf]": name === "ice",
            	"bg-[#b54]": name === "fighting",
            	"bg-[#a59]": name === "poison",
            	"bg-[#db5]": name === "ground",
            	"bg-[#89f]": name === "flying",
            	"bg-[#f59]": name === "psychic",
            	"bg-[#ab2]": name === "bug",
            	"bg-[#ba6]": name === "rock",
            	"bg-[#66b]": name === "ghost",
            	"bg-[#76e]": name === "dragon",
            	"bg-[#754]": name === "dark",
            	"bg-[#aab]": name === "steel",
            	"bg-[#e9e]": name === "fairy"

            })}
        >
            {name}
        </span>
	)
}