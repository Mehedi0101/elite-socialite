import { useNavigate } from 'react-router-dom';
import slider2 from '../../assets/slider2.jpg';

const Slider = () => {
    const navigate = useNavigate();
    const handleReadMore = () => {
        navigate('/about-us');
    }
    return (
        <div className='mt-4 font-primary'>
            <div className="hero min-h-[70vh]" style={{ backgroundImage: `url(${slider2})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 font-secondary text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Where Imagination Meets Execution</h1>
                        <p className="mb-5 text-sm md:text-base">Our creative team merges visionary concepts with flawless execution, bringing your wildest event ideas to life.</p>
                        <button onClick={handleReadMore} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;