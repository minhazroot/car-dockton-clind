

const About = () => {
    return (
        <div >
            <div className="flex flex-col items-center  md:flex-row gap-5 mb-52 mt-5">
                <div className="w-1/2">
                    <div className="absolute  ">
                        <img className=" h-[473px] w-[460px] rounded-3xl drop-shadow-2xl" src="https://i.ibb.co/CsJjHfL/person.jpg" alt="" />
                    </div>
                    <div className="relative top-48 left-52 ">
                        <img className="w-[327px] h-[332px] rounded-3xl drop-shadow-2xl" src="https://i.ibb.co/SNnNvgs/parts.jpg" alt="" />
                    </div>


                </div>
                <div className=" w-1/2 flex flex-col  justify-center gap-5 mt-14 md:mt-0 ">
                    <h3 className="text-3xl  text-red-600 font-extrabold" > About US </h3>
                    <h1 className="text-5xl font-extrabold">
                        We are qualified & of experience in this field
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <div>
                        <button className="btn btn-secondary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;