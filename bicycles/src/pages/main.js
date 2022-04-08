import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

function Main() {
    const navigate = useNavigate();

    //Function in another method
    const goToHelloWorld = () =>{
        navigate("/HelloWorld");
    }
    /*Function in another method
    function goToHelloWorld(){}*/

    return (
        <>
            <p>This is the Main</p>
            <button onClick={goToHelloWorld}>Go to War World</button>
            <Footer />
        </>
    );
}

export default Main;