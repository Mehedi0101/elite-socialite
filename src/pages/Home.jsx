import { useEffect } from "react";
import Blogs from "../components/Home/Blogs/Blogs";
import Expert from "../components/Home/Expert";
import Quote from "../components/Home/Quote";
import Request from "../components/Home/Request";
import Services from "../components/Home/Services/Services";
import Slider from "../components/Home/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
    document.title = "EliteSocialite";

    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <div className="">
            <Slider></Slider>
            <div data-aos="fade-up"><Quote></Quote></div>
            <Services></Services>
            <Expert></Expert>
            <Request></Request>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;