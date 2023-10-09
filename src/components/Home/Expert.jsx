import { useEffect } from 'react';
import expert from '../../assets/expert.jpg';
import signature from '../../assets/signature.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Expert = () => {

    useEffect(() => {
        AOS.init({
          duration : 500
        });
    }, []);

    return (
        <div className="md:mx-4 px-4 md:px-8 mt-28 font-primary">
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold font-secondary text-center mb-10 text-dark1'>Meet Our Expert</h2>
            <div data-aos="fade-right" className={'flex items-center justify-between gap-x-10 gap-y-4 mb-14 flex-col lg:flex-row-reverse'}>
                <div className='w-full lg:w-1/2'>
                    <img className='' src={expert} alt="" />
                </div>
                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <h2 className='font-secondary font-bold text-3xl md:text-4xl lg:text-5xl text-dark1'>Emily Johnson</h2>
                    <h3 className='mb-3 md:mb-5 text-dark1 font-secondary text-2xl font-semibold mt-2'>Master Event Orchestrator</h3>
                    <p className='text-sm md:text-base text-dark2 mb-4'>Emily Johnson, a seasoned Master Event Orchestrator, boasts a decade-long career crafting unforgettable gatherings. Her journey began with a passion for event planning, evolving into an expert known for meticulous attention to detail. She specializes in curating unique experiences, whether it&apos;s elegant weddings, high-profile corporate galas, or large-scale festivals. Emily&apos;s talent extends beyond logistics; it&apos;s her personal touch that sets her apart.</p>
                    <p className='text-sm md:text-base text-dark2 mb-2 md:mb-4'>She builds strong relationships with clients and vendors, ensuring every event reflects her unwavering commitment to excellence. With her creativity, organizational finesse, and dedication, Emily Johnson is the trusted choice for transforming dreams into remarkable, flawlessly executed events.</p>
                    <img className='h-40 mx-auto' src={signature} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Expert;