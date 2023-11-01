import About from "../About/About";
import Address from "../Address/Address";
import Banar from "../Banar/Banar";
import Team from "../Team/Team";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

// import About form  "../About/About"

const Home = () => {
    return (
        <div>
            <Banar></Banar>

            <About></About>

            <Address></Address>

            <Team></Team>

            <WhyChooseUs></WhyChooseUs>

        </div>
    );
};

export default Home;