import Proptypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';

const Service = ({service}) => {
    const {id,title,image,description} = service;
    return (
        <div className={`flex items-center gap-x-10 gap-y-4 mb-14 flex-col ${id%2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className='w-full md:w-1/2'>
                <img className='min-h-full' src={image} alt="" />
            </div>
            <div className='w-full md:w-1/2 text-center md:text-left'>
                <h2 className='font-secondary font-bold text-3xl md:text-4xl lg:text-5xl text-dark1 mb-3 md:mb-5'>{title}</h2>
                <p className='text-sm md:text-base text-dark2 mb-2 md:mb-4'>{description}</p>
                <button className="flex items-center gap-1 bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform mx-auto md:mx-0">Get Started<BsArrowRight /></button>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: Proptypes.object.isRequired
}

export default Service;