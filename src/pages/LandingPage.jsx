import HeroLanding from "../components/HeroLanding";
import AboutLanding from "../components/AboutLanding";
import FeaturesLanding from "../components/FeaturesLanding";
import BuiltLanding from "../components/BuiltLanding";
import ImagesLanding from "../components/ImagesLanding";
import { stackList } from "../data/stack"
import { imageList } from "../data/projectImages"
import CtaLanding from "../components/CtaLanding";

function LandingPage() {

    return (
        <main>
            <HeroLanding></HeroLanding>
            <AboutLanding></AboutLanding>
            <FeaturesLanding></FeaturesLanding>
            <ImagesLanding image={imageList}></ImagesLanding>
            <BuiltLanding stack={stackList}></BuiltLanding>
            <CtaLanding></CtaLanding>
        </main>

    )
}

export default LandingPage