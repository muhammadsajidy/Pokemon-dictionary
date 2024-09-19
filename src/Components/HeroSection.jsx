import { useState, useEffect } from "react"
import PokémonBox from "./PokémonBox";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function HeroSection() {

    const [open, setOpen] = useState(false);
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(data => data.json())
        .then(data => setPokemon(data));
    }, [])

    return(
        <>
            <h1 className="mt-5 text-3xl text-white text-center font-matemasie">Click on the Pokéball to reveal a Pokemon!</h1>
            <div className="h-[75vh] w-[90%] mx-auto flex items-center justify-center gap-7">
                <img src="./src/assets/pokeball.png" alt="" className={open?"sm:w-48 lg:w-56 animate-spin cursor-pointer":"sm:w-48 animate-spin cursor-pointer"} onClick={() => setOpen(!open)}/>
                {open?<PokémonBox image={pokemon.sprites.front_default} name={pokemon.name}/>:null}
            </div>
        </>
    )
}
// [animation-play-state:paused]