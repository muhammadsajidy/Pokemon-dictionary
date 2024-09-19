import PokémonBox from "./PokémonBox"

export default function Featured() {

    return(
        <>
            <div className="my-8">
                <h1 className="text-3xl text-white text-center font-matemasie">Featured Pokémons</h1>
                <div className="w-[95%] mx-auto my-10 flex flex-wrap justify-center gap-3">
                    {[...Array(4)].map(item => {return <PokémonBox key={item}/>})}
                </div>
            </div>
        </>
    )
}