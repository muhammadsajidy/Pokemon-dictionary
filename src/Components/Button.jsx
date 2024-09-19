export default function Button(text) {
    return(
        <>
            <a href={text.path} className="mr-2 font-matemasie">
                <div>
                    <p className="text-xl px-2 py-1 box-content border-[3px] border-[#f0b841] hover:border-blue-500 bg-[#f0b841] rounded-lg flex items-center transition ease-in-out delay-150 hover:-translate-x-1 hover:bg-yellow-500 duration-300">
                    {text.name}
                    <img src="./src/assets/arrowicon.png" alt="" className="w-8 mt-2 animate-pulse ml-2"/>
                    </p>
                </div>
            </a>
        </>
    )
}