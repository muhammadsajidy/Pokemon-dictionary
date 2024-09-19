import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";

export default function Home() {
    return(
        <>
            <Header name="Dictionary" path="/dictionary"/>
            <HeroSection />
            <hr className="bg-white w-[90%] mx-auto"/>
            <About />
            <hr className="bg-white w-[90%] mx-auto"/>
            <Featured />
            <hr className="bg-white w-[90%] mx-auto"/>
            <Footer />
        </>
    )
}