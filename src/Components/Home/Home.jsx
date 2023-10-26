import Footer from "../../Sharets/Footer/Footer";
import About from "../About/About";
import Services from "../Services/Services";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Footer></Footer>
        </div>
    );
};

export default Home;