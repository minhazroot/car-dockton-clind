

const Banar = () => {
    return (
        <div className="carousel w-full mt-5 rounded-xl  ">
            <div id="slide1" className="carousel-item relative w-full  ">
                <img src="https://i.ibb.co/PTGGYXK/1.jpg" className="w-full" />
                <div className="absolute  left-0  h-[100%]  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]   ">
                    <div className="text-white flex flex-col gap-y-5  ml-10 mt-[30%] w-[50%]">
                        <h1 className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="">
                            <button className="btn btn-outline btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/QmxjpZ4/2.jpg" className="w-full" />
                <div className="absolute  left-0  h-[100%]  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]   ">
                    <div className="text-white flex flex-col gap-y-5  ml-10 mt-[30%] w-[50%]">
                        <h1 className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="">
                            <button className="btn btn-outline btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10 ">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/DbKcs8p/3.jpg" className="w-full" />
                <div className="absolute  left-0  h-[100%]  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]   ">
                    <div className="text-white flex flex-col gap-y-5  ml-10 mt-[30%] w-[50%]">
                        <h1 className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="">
                            <button className="btn btn-outline btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10 ">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/pxHKTsg/4.jpg" className="w-full" />
                <div className="absolute  left-0  h-[100%]  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]   ">
                    <div className="text-white flex flex-col gap-y-5  ml-10 mt-[30%] w-[50%]">
                        <h1 className="text-6xl font-extrabold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="">
                            <button className="btn btn-outline btn-secondary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-10 ">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banar;