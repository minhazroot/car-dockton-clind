
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";





const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const handelLogout = () => {
        LogOut()
            .then(() => {
                console.log('Log out success full ')
            }).catch(error => { console.error(error) })
    }


    const NavItem = <>
        <li className="bg-white"><Link to='/'>Home</Link> </li>
        <li className="bg-white"><Link to='/about'>About</Link> </li>
        {/* <li className="bg-white"><Link to='/'>Services</Link> </li>
        <li className="bg-white"><Link to='/'>Blog</Link> </li>
        <li className="bg-white"><Link to='/'>Contact</Link> </li> */}


        <li className="bg-white"><Link to='/Regestation'>Registration</Link> </li>
        {
            user ?
                <>

                    <p>{user.email}</p>
                    <img className="rounded-full w-10 h-10 m-3" src={user.photoURL} alt="" />


                    <NavLink onClick={handelLogout} className="btn btn-sm">Sig out</NavLink>
                </> : <NavLink to="/login" className="btn btn-sm">Log In</NavLink>
        }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost  normal-case text-xl">

                    <img className="h-15 w-20" src="https://i.ibb.co/HTY31tL/logos.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItem}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;