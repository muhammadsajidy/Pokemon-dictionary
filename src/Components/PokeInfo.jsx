

export default function PokeInfo(inps) {

    return(
        <>
            <div className="w-[60%] md:w-[45%] h-[90%] mx-auto bg-white font-mono flex flex-col rounded-md">
                <img src={inps.data.sprites.front_default} alt="" className="w-44 mx-auto my-2 border-2 rounded-md border-black"/>
                <table className="border-2 border-black w-[90%] mx-auto text-center my-3">
                    <tbody>
                        <tr>
                            <td className="border-2 border-black">Name</td>
                            <td className="border-2 border-black">{inps.data.name}</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-black">Species</td>
                            <td className="border-2 border-black">{inps.data.species.name}</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-black">Ability</td>
                            <td className="border-2 border-black">{inps.data.abilities[1].ability.name}</td>    
                        </tr>
                        <tr>
                            <td className="border-2 border-black">Type</td>
                            <td className="border-2 border-black">{inps.data.types[0].type.name}</td>
                        </tr>
                    </tbody>
                </table>
                <h1 className="text-center text-xl mb-1">Stats</h1>
                <table className="border-2 border-black w-[90%] mx-auto text-center">
                    <tbody>
                        {[1,2,3,4,5].map(index => {return <tr>
                            <td className="border-2 border-black">{inps.data.stats[index].stat.name}</td>
                            <td className="border-2 border-black">{inps.data.stats[index].base_stat}</td>
                        </tr>})}
                    </tbody>
                </table>
                <div className="my-3">
                    <h1 className="text-center text-xl mb-1">Image Gallery</h1>
                    <div className="flex items-center justify-center">
                        <img src={inps.data.sprites.front_default} alt="" />
                        <img src={inps.data.sprites.back_default} alt="" />
                        <img src={inps.data.sprites.front_shiny} alt="" />
                        <img src={inps.data.sprites.back_shiny} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}