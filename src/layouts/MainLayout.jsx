import { Outlet } from "react-router-dom";
import Footer from "../components/shared components/Footer";
import Navbar from "../components/shared components/Navbar";
import ScrollToTop from "../utils/scrollToTop";

const MainLayout = () => {
    return (
        <div className="overflow-x-hidden">
            <ScrollToTop />
            <Navbar></Navbar>
            <div className="min-h-[60vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;