import LandingHero from "../components/Hero/LandingHero";
import NavBar from "../components/NavBar";
import About from "../components/About/AboutLanding";
import FeaturesLanding from "../components/Features/FeaturesLanding";
import BuiltWith from "../components/BuiltWith/BuiltWith";
import ImagesLanding from "../components/ImagesLanding/ImagesLanding";
import {stackList} from "../data/stack"
import {imageList} from "../data/projectImages"

function LandingPage() {

    return (
        <main>
            <LandingHero></LandingHero>
            <About></About>
            <FeaturesLanding></FeaturesLanding>
            <ImagesLanding image={imageList}></ImagesLanding>
            <BuiltWith stack={stackList}></BuiltWith>
            
        </main>
        
    )
}

export default LandingPage