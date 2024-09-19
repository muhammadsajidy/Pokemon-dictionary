import { useState } from "react"
import PokeInfo from "./PokeInfo";

export default function Search() {

    const [ input, setInput ] = useState("");
    const [ info, setInfo ] = useState(null);

    async function fetchData() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(res => res.json())
        .then(data => {
            setInfo(data);
            console.log(data);
        })
        .catch(err => console.error(err))
    }

    return (
        <>
        <div className="my-3 flex flex-col gap-8 justify-center items-center h-[85%]">
            <div className="flex bg-white rounded-lg">
                <input onChange={e=>{setInput(e.target.value)}} id="poke" type="text" className="text-3xl bg-transparent rounded-lg outline-none text-center"/>
                <img onClick={fetchData} className="w-12 text-lg cursor-pointer border-l-gray-400 border-[2px] rounded-r-lg" src="./src/assets/searchicon.png"/>
            </div>
            {info?<PokeInfo data={info} />:null}
        </div>
    </>
    )
}