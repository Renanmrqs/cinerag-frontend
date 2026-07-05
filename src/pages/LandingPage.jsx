import Button from "../components/Button/Button";
import Toast from "../components/Toast";

function LandingPage() {
    return (
        <div>
        <h1>Landing Page</h1>
        <Button variant={"primary-btn big-btn-size" }>Primary</Button>
        <Button variant={"secondary-btn" }>Secondary</Button>
        <Toast>Carregando</Toast>
        </div>
        
    )
}

export default LandingPage