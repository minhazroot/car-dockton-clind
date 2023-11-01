
import { AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
const Team = () => {
    return (
        <div className="mt-5">
            <h1 className=" text-6xl font-extrabold text-center"> Meet Our Team</h1>
            <p className=" w-1/2 mx-auto text-center mt-5">
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>

            <div className="flex flex-col md:flex-row gap-5 mt-5">
                {/* card 1  */}
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img className="h-full" src="https://i.ibb.co/jLXNcgH/1.jpg" alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Car Engine Plug
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                            Engine Expert
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7 text-4xl text-red-500">
                        <Link><AiFillFacebook></AiFillFacebook></Link>
                        <Link><AiFillTwitterCircle></AiFillTwitterCircle></Link>
                        <Link><AiFillLinkedin></AiFillLinkedin></Link>
                        <Link><AiFillInstagram></AiFillInstagram></Link>


                    </div>
                </div>
                {/* card 2  */}
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img className="h-full" src="https://i.ibb.co/98cZkVw/2.jpg" alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Car Engine Plug
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                            Engine Expert
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7 text-4xl text-red-500">
                        <Link><AiFillFacebook></AiFillFacebook></Link>
                        <Link><AiFillTwitterCircle></AiFillTwitterCircle></Link>
                        <Link><AiFillLinkedin></AiFillLinkedin></Link>
                        <Link><AiFillInstagram></AiFillInstagram></Link>


                    </div>
                </div>
                {/* card 3  */}
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 w-full  mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img className="h-full" src="https://i.ibb.co/YNwm1Wd/3.jpg" alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Car Engine Plug
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                            Engine Expert
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7 text-4xl text-red-500">
                        <Link><AiFillFacebook></AiFillFacebook></Link>
                        <Link><AiFillTwitterCircle></AiFillTwitterCircle></Link>
                        <Link><AiFillLinkedin></AiFillLinkedin></Link>
                        <Link><AiFillInstagram></AiFillInstagram></Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;