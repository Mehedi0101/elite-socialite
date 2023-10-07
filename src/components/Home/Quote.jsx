import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Quote = () => {
    return (
        <div className='mt-20 font-secondary md:mx-4 px-4 md:px-8 flex flex-col items-center text-center text-dark1'>
            <div><BiSolidQuoteAltLeft className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#d9d8d9]' /></div>
            <div className='text-4xl md:text-5xl lg:text-6xl'>Celebrate we will, <br /> for life is short <br /> but sweet for certain</div>
            <div className='text-xl lg:text-2xl mt-2 md:mt-5'>Dave Matthews</div>
        </div>
    );
};

export default Quote;