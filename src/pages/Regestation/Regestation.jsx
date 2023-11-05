
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';


const Regestation = () => {
    const { createUser } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const [RegistrationSuccess, setRegistrationSuccess] = useState('')

    const HandelRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        setPasswordError('')
        setRegistrationSuccess('')
        console.log(email, password, name)
        //password vallation  
        if (password.length < 6) {
            setPasswordError('password should be at list 6 carets');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError('your password should have capital letter')
            return;
        }
        const SpecialSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!SpecialSymbol.test(password)) {
            setPasswordError("Password must contain at least one Special Symbol.")
            return;

        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                event.target.reset();
                setRegistrationSuccess('Registration Success')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex gap-10  ">
                <div className=" w-1/2 mr-12">
                    <img className="h-[500px]" src="https://i.ibb.co/y8Sh6zF/62e2bda8af29cc85b7fd0df2-icon.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center text-orange-500 mt-5">Registration </h1>
                    <form onSubmit={HandelRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
                        </div>
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

                            <input className="btn btn-primary bg-orange-500" type="submit" value="REGISTRATION" />
                            <div className='mt-2'>
                                <p className="text-center  mt-2 text-red-600">{passwordError}</p>
                                <p className="text-center  mt-2 text-green-600">{RegistrationSuccess}</p>
                            </div>
                        </div>
                        <div className=" mt-4 text-center font-bold">
                            <p>Already have an account? <span className="text-orange-500"> <Link to="/login">Login</Link> </span></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Regestation;