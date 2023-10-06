import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4 font-primary">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to='/' className="flex items-center mb-4 sm:mb-0">
                        <img className="w-28 md:w-48" src={logo} alt="" />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">EliteSocialite™</a>. All Rights Reserved.</span>
            </div>
        </footer>

    );
};

export default Footer;