
import { FcOvertime, FcPhone } from "react-icons/fc";
import { SlLocationPin } from "react-icons/sl";
const Address = () => {
    return (
        <div className="h-[250px] bg-black flex flex-col md:flex-row justify-between p-3 rounded-2xl">
            <div className="flex items-center gap-x-3 text-white">
                <div className="text-7xl text-red-500 ">
                    <FcOvertime></FcOvertime>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className="text-3xl font-extrabold">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex items-center gap-x-3 text-white">
                <div className="text-7xl text-red-500 ">
                    <FcPhone></FcPhone>
                </div>
                <div>
                    <p>Have a question?</p>
                    <h3 className="text-3xl font-extrabold">01816142494</h3>
                </div>
            </div>
            <div className="flex items-center gap-x-3 text-white">
                <div className="text-7xl text-red-500 ">
                    <SlLocationPin></SlLocationPin>
                </div>
                <div>
                    <p>Need a repair? our address</p>
                    <h3 className="text-3xl font-extrabold">Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Address;