import { useState } from "react";
import Button from "../components/Button/Button";
import Toast from "../components/Toast";
import Spinner from "../components/Spinner";

function LandingPage() {
    const [trigger, setTrigger] = useState(true)
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        
    setLoading(false)}, 3000);

    return (
        <div>
        <h1>Landing Page</h1>
        <Button variant={"primary-btn big-btn-size" }>Primary</Button>
        <Button variant={"secondary-btn" }  >Secondary</Button>
        <Toast trigger={trigger}  onClose={ (e) => setTrigger(false)}>Carregando</Toast>
        <Spinner loading={loading}></Spinner>
        </div>
        
    )
}

export default LandingPage