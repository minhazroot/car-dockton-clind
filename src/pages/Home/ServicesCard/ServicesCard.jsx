import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const ServicesCard = ({ services }) => {
    const { _id, title, img, price } = services;
    console.log(services)
    return (
        <div >
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                    <img
                        src={img}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <div className="  mb-2">
                        <h3 className="block text-3xl font-sans antialiased font-medium leading-relaxed text-blue-gray-900">
                            {title}
                        </h3>
                        <div className='flex items-center justify-between'>
                            <p className="block text-orange-500 font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                Price: $ {price}
                            </p>
                            <Link to={`CheckOut/${_id}`}> <button className='text-2xl text-orange-500'>  <AiOutlineArrowRight></AiOutlineArrowRight></button></Link>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ServicesCard;