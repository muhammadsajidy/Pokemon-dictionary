import { useState, useEffect } from "react"
 
export default function PokémonBox() {

    const [open, setOpen] = useState(false);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 100) + '/')
        .then(response => response.json())
        .then((pokemon) => {
            setPokemon(pokemon);
        })
        .catch((error) => console.error(error))
    }, [])

    return(
        <>
            {pokemon?<div className={open?"border-2 border-black bg-white py-2 px-3 hidden":"bg-white sm:py-2 px-3 rounded-md cursor-pointer flex flex-col sm:w-[30%] md:w-[25%] h-fit items-center font-matemasie"}>
                <img src={pokemon.sprites.front_default} alt="" className="w-[70%] h-[40%] scale-[150%] mx-auto sm:mt-5 md:mt-5 md:mb-7"/>
                <p className="text-center text-lg md:text-2xl">{pokemon.name}</p>
            </div>:null}
        </>
    )
}