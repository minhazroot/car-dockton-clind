import About from "../About/About";
import Address from "../Address/Address";
import Banar from "../Banar/Banar";
import Team from "../Team/Team";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Services from "./services/Services";

// import About form  "../About/About"

const Home = () => {
    return (
        <div>
            <Banar></Banar>

            <About></About>
            <Services></Services>
            <Address></Address>

            <Team></Team>

            <WhyChooseUs></WhyChooseUs>

        </div>
    );
};

export default Home;