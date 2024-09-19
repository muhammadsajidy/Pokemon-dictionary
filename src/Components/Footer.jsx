

export default function Footer() {
    return(
        <>
            <div className="text-white w-[92%] mx-auto my-6 flex flex-col justify-center items-center font-mono">
                <p className="text-white text-xl">Social Media Handles</p>
                <div className="flex gap-14 my-6">
                    <a href="https://www.instagram.com/muhammadsajid_04/" target="/blank"><img src="./src/assets/instaicon.png" alt="" className="h-10 w-10"/></a>
                    <a href="https://www.instagram.com/muhammadsajid_04/" target="/blank"><img src="./src/assets/githubicon.png" alt="" className="h-9 w-9"/></a>
                    <a href="https://www.linkedin.com/in/muhammad-sajid-y-1768b4290/" target="/blank"><img src="./src/assets/linkedinicon.png" alt="" className="h-8 w-8"/></a>
                </div>
            </div>
        </>
    )
}