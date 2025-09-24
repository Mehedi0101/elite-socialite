import { useEffect } from "react";
import cover from "../assets/about-us-cover.webp";
import teammate1 from "../assets/expert.jpg";
import teammate2 from "../assets/teammate-1.jpg";
import teammate3 from "../assets/teammate-2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

    document.title = "About Us";

    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);

    return (
        <div data-aos="fade-up" className="font-primary md:mx-4 px-4 md:px-8 mt-14 lg:mt-28">
            <div className={'flex items-center gap-x-10 gap-y-4 mb-14 flex-col md:flex-row-reverse'}>
                <div className='w-full md:w-1/2'>
                    <img className='min-h-full' src={cover} alt="" />
                </div>
                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <h2 className='font-secondary font-bold text-3xl md:text-4xl lg:text-5xl text-dark1 mb-3 md:mb-5'>Create an event</h2>
                    <p className='text-sm md:text-base text-dark2 mb-2 md:mb-4'>Whether you&apos;re planning a corporate conference, a dazzling wedding, a milestone celebration, or any other special occasion, our service is your canvas for innovation. We understand that every event is unique, and that&apos;s why we offer a customizable platform that allows you to bring your ideas to life.</p>
                </div>
            </div>

            <div data-aos="fade-up" className='grid items-center grid-cols-1 md:grid-cols-3 gap-10 mb-14 text-center font-primary text-dark1 mt-20'>
                <div className="">
                    <img className="w-full" src={teammate1} alt="" />
                    <h3 className="tracking-widest text-sm text-dark2 mt-5">Main Ceo</h3>
                    <h2 className="font-secondary lg:text-4xl md:text-3xl text-2xl">Emily Johnson</h2>
                </div>

                <div className="">
                    <img className="w-full" src={teammate3} alt="" />
                    <h3 className="tracking-widest text-sm text-dark2 mt-5">Catering Expert</h3>
                    <h2 className="font-secondary lg:text-4xl md:text-3xl text-2xl">Alexander Johnson</h2>
                </div>
                
                <div className="">
                    <img className="w-full" src={teammate2} alt="" />
                    <h3 className="tracking-widest text-sm text-dark2 mt-5">Event Planner</h3>
                    <h2 className="font-secondary lg:text-4xl md:text-3xl text-2xl">Olivia Smith</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;