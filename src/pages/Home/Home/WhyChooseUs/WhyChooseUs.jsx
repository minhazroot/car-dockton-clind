

const WhyChooseUs = () => {
    return (
        <div className=' mt-5'>
            <h1 className=" text-6xl font-extrabold text-center">Why Choose Us</h1>
            <p className=" w-1/2 mx-auto text-center mt-5">
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-between mb-10">
                <div className=" flex flex-col items-center">
                    <img className="w-[50px] h-[50px]" src="https://i.ibb.co/wRgH9Bd/partners.png" alt="" />
                    <h3 className=" text-2xl text-gray-500 font-bold">Expert Team</h3>
                </div>
                <div className=" flex flex-col items-center">
                    <img className="w-[50px] h-[50px]" src="https://i.ibb.co/s2XCLhg/delivery-truck.png" alt="" />
                    <h3 className=" text-2xl text-gray-500 font-bold">Timely Delivery</h3>
                </div>
                <div className=" flex flex-col items-center">
                    <img className="w-[50px] h-[50px]" src="https://i.ibb.co/wzNp6tn/24-hours-support.png" alt="" />
                    <h3 className=" text-2xl text-gray-500 font-bold">24/7 Support</h3>
                </div>
                <div className=" flex flex-col items-center">
                    <img className="w-[50px] h-[50px]" src="https://i.ibb.co/7K9bMrs/maintenance.png" alt="" />
                    <h3 className=" text-2xl text-gray-500 font-bold">Best Equipment</h3>
                </div>
                <div className=" flex flex-col items-center">
                    <img className="w-[50px] h-[50px]" src="https://i.ibb.co/26ZqZ4K/shield.png" alt="" />
                    <h3 className=" text-2xl text-gray-500 font-bold">100% Guaranty</h3>
                </div>
                <div className=" flex flex-col items-center">
                    <img className="w-[50px] h-[50px]" src="https://i.ibb.co/rMmLKLz/on-time.png" alt="" />
                    <h3 className=" text-2xl text-gray-500 font-bold">Timely Delivery</h3>
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;