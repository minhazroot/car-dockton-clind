

import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const CheckOut = () => {



    const service = useLoaderData();
    const { _id, img, price, title } = service;
    // console.log(service)


    const HandelBookService = event => {
        event.preventDefault();
        const form = event.target;
        const Name = form.Name.value;
        const date = form.date.value;

        const email = form.email.value;
        const order = {
            CustomerName: Name,
            email,
            date,
            service_img: img,
            service_name: title,
            service_id: _id,
            price: price

        }

        console.log(order)



        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(order)
        })
            .then(rec => rec.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal("Good job!", "your bookings success full add  ", "success")
                }
            })

    }



    return (

        <div>
            <h2 className="text-3xl text-center mb-5">Check Out</h2>
            {/* product deters sum display   */}
            <div className="flex w-[80%] mx-auto gap-5 justify-around items-center ">
                <div className="" >
                    <img className="h-[150px] w-[300px] rounded-2xl shadow-2xl " src={img} alt="" />
                </div>
                <div>
                    <h3 className=" text-3xl font-semibold"> {title}</h3>
                    <p className="text-orange-600"> price: $ {price}</p>
                </div>
            </div>

            {/* CheckOut form  */}
            <div className="gird grid-cols-1 md:grid-cols-2">


                <form onSubmit={HandelBookService} className="card-body ">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="First Name" name="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="date" name="date" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount </span>
                            </label>
                            <input type="text" defaultValue={"$" + price} name="DueAmount" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />

                        </div>
                    </div>

                    <div className="form-control mt-6">

                        <button className="btn btn-block bg-orange-500"> <input className="" type="submit" value="Order Confirm" /></button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default CheckOut;