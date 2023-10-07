import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/Logo.png";
import './styles/Navbar.css';
import { useState } from "react";



const Navbar = () => {
    const links =
        <>
            <NavLink onClick={()=>{setShowMenu(false)}} to='/'>Home</NavLink>
            <NavLink onClick={()=>{setShowMenu(false)}} to='/services'>Services</NavLink>
            <NavLink onClick={()=>{setShowMenu(false)}} to='/blogs'>Blogs</NavLink>
            <NavLink onClick={()=>{setShowMenu(false)}} to='/bookings'>Bookings</NavLink>
        </>

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            {/* large device */}
            <div className="hidden m-4 px-8 lg:flex items-center justify-between font-primary text-dark1">
                <div>
                    <img className="w-48 lg:w-72" src={logo} alt="" />
                </div>
                <div className="flex items-center gap-14">
                    <div className="text-[#3e3930] flex gap-8 font-medium">
                        {
                            links
                        }
                    </div>
                    <div>
                        <button className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Login</button>
                    </div>
                </div>
            </div>

            {/* medium device */}
            <div className="hidden sm:flex lg:hidden md:m-4 px-4 md:px-8 justify-between mt-4 text-dark1">
                <div className="flex items-center">
                    <FiMenu onClick={()=>{setShowMenu(!showMenu)}} className="text-2xl mr-2 cursor-pointer" />
                    <Link to='/'><img className="w-48 mx-auto" src={logo} alt="" /></Link>
                </div>
                <div>
                    <button className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Login</button>
                </div>
                <div className={`absolute top-[70px] flex flex-col gap-3 text-white bg-[#000000BB] p-8 rounded z-10 ${!showMenu && 'hidden'}`}>
                    {links}
                </div>
            </div>

            {/* small device */}
            <div className="sm:hidden px-4 mt-4 text-dark1">
                <div className="flex items-center">
                    <FiMenu onClick={()=>{setShowMenu(!showMenu)}} className="text-2xl mr-2 cursor-pointer" />
                    <Link className="block mx-auto" to='/'><img className="w-40 -ml-2" src={logo} alt="" /></Link>
                </div>
                <div className={`absolute top-[70px] flex flex-col gap-3 text-white bg-[#000000BB] p-8 rounded z-10 ${!showMenu && 'hidden'}`}>
                    {links}
                    <button onClick={()=>{setShowMenu(false)}} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Login</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;