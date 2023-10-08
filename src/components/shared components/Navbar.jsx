import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/Logo.png";
import './styles/Navbar.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import defaultUser from "../../assets/default-user.png"
import { Store } from "react-notifications-component";



const Navbar = () => {
    const { currentUser, logoutUser } = useContext(AuthContext);
    const [showUser, setShowUser] = useState(false);
    const links =
        <>
            <NavLink onClick={() => { setShowMenu(false) }} to='/'>Home</NavLink>
            <NavLink onClick={() => { setShowMenu(false) }} to='/blogs'>Blogs</NavLink>
            <NavLink onClick={() => { setShowMenu(false) }} to='/support'>Support</NavLink>
            <NavLink onClick={() => { setShowMenu(false) }} to='/about-us'>About Us</NavLink>
        </>

    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                Store.addNotification({
                    title: "Logged out successfully",
                    type: "info",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }
                })
            })
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <>
            {/* large device */}
            <div className="hidden m-4 px-8 lg:flex items-center justify-between font-primary text-dark1">
                <div>
                    <Link to='/'><img className="w-48 lg:w-72" src={logo} alt="" /></Link>
                </div>
                <div className="flex items-center gap-14">
                    <div className="text-[#3e3930] flex gap-8 font-medium">
                        {
                            links
                        }
                    </div>
                    <div>
                        {
                            currentUser
                                ?
                                <div className="flex items-center gap-3 relative">
                                    <div className="bg-slate-200 text-dark1 px-5 py-2 rounded font-bold">{currentUser.displayName}</div>
                                    <img onClick={() => { setShowUser(!showUser) }} className="w-12 h-12 object-cover rounded-full cursor-pointer border hover:border-2 border-primary" src={currentUser.photoURL || defaultUser} alt="" />
                                    <div className={`absolute top-[60px] right-0 flex flex-col gap-3 text-white bg-[#000000BB] p-8 rounded z-10 ${!showUser && 'hidden'}`}>
                                        <p onClick={() => { setShowUser(false) }} className="mb-3 flex gap-2"><span className="font-bold">Email: </span>{currentUser.email}</p>
                                        <button onClick={() => { setShowUser(false); handleLogout(); }} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform w-fit ml-auto">Logout</button>
                                    </div>
                                </div>
                                :
                                <button onClick={handleLogin} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Login</button>
                        }
                    </div>
                </div>
            </div>

            {/* medium device */}
            <div className="hidden sm:flex lg:hidden md:m-4 px-4 md:px-8 justify-between mt-4 text-dark1">
                <div className="flex items-center">
                    <FiMenu onClick={() => { setShowMenu(!showMenu) }} className="text-2xl mr-2 cursor-pointer" />
                    <Link to='/'><img className="w-48 mx-auto" src={logo} alt="" /></Link>
                </div>
                <div>
                    {
                        currentUser
                            ?
                            <div className="flex items-center gap-3">
                                <div className="bg-slate-200 text-dark1 px-5 py-2 rounded font-bold">{currentUser.displayName}</div>
                                <img onClick={() => { setShowUser(!showUser) }} className="w-10 h-10 object-cover rounded-full cursor-pointer border hover:border-2 border-primary" src={currentUser.photoURL || defaultUser} alt="" />
                                <div className={`flex absolute top-[60px] right-4 md:right-12 flex-col gap-3 text-white bg-[#000000BB] p-8 rounded z-10 ${!showUser && 'hidden'}`}>
                                    <p onClick={() => { setShowUser(false) }} className="mb-3"><span className="font-bold">Email: </span>{currentUser.email}</p>
                                    <button onClick={() => { setShowUser(false); handleLogout(); }} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform w-fit ml-auto">Logout</button>
                                </div>
                            </div>
                            :
                            <button onClick={handleLogin} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Login</button>
                    }
                </div>
                <div className={`absolute top-[70px] flex flex-col gap-3 text-white bg-[#000000BB] p-8 rounded z-10 ${!showMenu && 'hidden'}`}>
                    {links}
                </div>
            </div>

            {/* small device */}
            <div className="sm:hidden px-4 mt-4 text-dark1">
                <div className="flex items-center">
                    <FiMenu onClick={() => { setShowMenu(!showMenu) }} className="text-2xl mr-2 cursor-pointer" />
                    <Link className="block mx-auto" to='/'><img className="w-40 -ml-2" src={logo} alt="" /></Link>
                </div>
                <div className={`absolute top-[70px] flex flex-col gap-3 text-white bg-[#000000BB] p-8 rounded z-10 ${!showMenu && 'hidden'}`}>
                    {
                        currentUser && <div className=""><span className="font-bold">Username:</span> {currentUser.displayName}</div>
                    }
                    {links}
                    {
                        currentUser
                            ?
                            <button onClick={() => { setShowMenu(false); handleLogout() }} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Logout</button>
                            :
                            <button onClick={() => { setShowMenu(false); handleLogin() }} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Login</button>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;