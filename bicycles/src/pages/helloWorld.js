import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import Counter from "../components/counter";

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
            <Counter/>
            <Footer />
        </>
    );
}

export default HelloWorld;