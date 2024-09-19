import Button from "./Button"

export default function Header(text) {

    return(
        <>
            <header className="flex justify-center items-center bg-transparent">
                <nav className="flex flex-row justify-between items-center w-[95%] px-1">
                    <Button name={text.name} path={text.path}/>
                    <div>
                        <img src="./src/assets/logo.png" alt="" className="w-40"/>
                    </div>
                </nav>
            </header>
        </>
    )
}
