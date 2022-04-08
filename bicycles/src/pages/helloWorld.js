import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

function HelloWorld() {
        const navigate = useNavigate();
    
        //Function in another method
        const goToMain = () =>{
            navigate("/");
        }
    return (
        <>
            <p>Hi Melina.</p>
            <button onClick={goToMain}>Go out to War World</button>
            <Footer />
        </>
    );
}

export default HelloWorld;