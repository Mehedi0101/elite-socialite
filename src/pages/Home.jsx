import Blogs from "../components/Home/Blogs/Blogs";
import Expert from "../components/Home/Expert";
import Quote from "../components/Home/Quote";
import Request from "../components/Home/Request";
import Services from "../components/Home/Services/Services";
import Slider from "../components/Home/Slider";

const Home = () => {
    return (
        <div className="">
            <Slider></Slider>
            <Quote></Quote>
            <Services></Services>
            <Expert></Expert>
            <Request></Request>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;