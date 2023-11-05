
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

    const [error, setError] = useState(null);
    const [LoginSuccess, setLoginSuccess] = useState('')
    const { SighingUser, SighingGoogle } = useContext(AuthContext)


    const HandelLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError(' ')
        setLoginSuccess('')
        console.log(email, password)

        SighingUser(email, password)

            .then(result => {
                console.log(result.user);
                setError(null)
                event.target.reset();
                setLoginSuccess('Login Successful ')
            })

            .catch(error => {
                console.error(error)
                setError(" Invalid email or password ");


            })

    }
    const HandelGoogleLogin = () => {
        SighingGoogle()
            .then(result => {
                console.log(result.user)
                setLoginSuccess('Login Successful ')
            }).catch(error => {
                console.error(error)
                setError("Google sign-in error");

            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex gap-10  ">
                <div className=" w-1/2 mr-12">
                    <img className="h-[500px]" src="https://i.ibb.co/y8Sh6zF/62e2bda8af29cc85b7fd0df2-icon.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center text-orange-500 mt-5">Login </h1>
                    <form onSubmit={HandelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="LOGIN" />
                            <div className="mt-5 flex flex-row gap-3 justify-center items-center">
                                <div>
                                    <button className="btn btn-outline btn-primary text-3xl" onClick={HandelGoogleLogin}><FcGoogle></FcGoogle></button>
                                </div>
                                <div>
                                    <span className="text-red-600 font-semibold">{error}</span>
                                    <span className="text-green-600 font-semibold">{LoginSuccess}</span>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-4 text-center font-bold">
                            <p>New to car Doctors   <span className="text-orange-500"> <Link to="/Regestation">Sign Up</Link> </span></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;