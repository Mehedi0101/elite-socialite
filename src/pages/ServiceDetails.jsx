import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ServiceDetails = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const allData = useLoaderData();
    const { serviceTitle } = useParams();
    const { details, image } = allData.find(service => service.title === serviceTitle);
    const { service_title, overview, key_features, benefits, how_it_works, customization_options, price_range, payment_options } = details;
    document.title = service_title;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    }

    const handleBooking = () => {
        Swal.fire(
            'Thank you!',
            `You have successfully booked for ${service_title}!`,
            'success',
        )
    }

    return (
        <div className="font-primary md:mx-4 px-4 md:px-8 mt-10 lg:mt-20 text-dark2 text-sm md:text-base">
            <h1 className="text-center font-secondary font-bold text-3xl md:text-4xl lg:text-5xl text-dark1 mb-2 md:mb-6 lg:mb-10">{service_title}</h1>
            <p data-aos="fade-up" className="mb-5 md:mb-10">{overview}</p>
            <div data-aos="fade-up" className="mb-5 md:mb-10">
                <p className="font-secondary font-bold text-2xl md:text-3xl text-dark1 mb-2">Features:</p>
                {
                    key_features.map((feature, idx) => <li className="ml-2 lg:ml-4" key={idx}>{feature}</li>)
                }
            </div>
            <div data-aos="fade-up" className="mb-5 md:mb-10">
                <img className="max-w-full mx-auto" src={image} alt="" />
            </div>
            <div data-aos="fade-up" className="mb-5 md:mb-10">
                <p className="font-secondary font-bold text-2xl md:text-3xl text-dark1 mb-2">Benefits:</p>
                {
                    benefits.map((benefit, idx) => <li className="ml-2 lg:ml-4" key={idx}>{benefit}</li>)
                }
            </div>
            <div data-aos="fade-up" className="mb-5 md:mb-10">
                <p className="font-secondary font-bold text-2xl md:text-3xl text-dark1 mb-2">How to book:</p>
                {
                    how_it_works.map((process, idx) => <li className="ml-2 lg:ml-4" key={idx}>{process}</li>)
                }
            </div>
            <div data-aos="fade-up" className="mb-5 md:mb-10">
                <p className="font-secondary font-bold text-2xl md:text-3xl text-dark1 mb-2">Customization Options:</p>
                {
                    customization_options.map((option, idx) => <li className="ml-2 lg:ml-4" key={idx}>{option}</li>)
                }
            </div>
            <p data-aos="fade-up" className="mb-5 md:mb-10 font-secondary font-bold text-2xl md:text-3xl text-dark1">Price range: <span className="font-primary text-sm md:text-base font-medium">{price_range}</span></p>
            <div data-aos="fade-up" className="mb-5 md:mb-10">
                <p className="font-secondary font-bold text-2xl md:text-3xl text-dark1 mb-2">Payment Options:</p>
                {
                    payment_options.map((payment, idx) => <li className="ml-2 lg:ml-4" key={idx}>{payment}</li>)
                }
            </div>
            <div className="flex justify-between flex-wrap-reverse gap-5">
                <button onClick={handleGoBack} className="text-primary font-semibold active:scale-95 transition-transform flex items-center gap-1"><RiArrowGoBackFill className="text-xl" />Go Back</button>
                <button onClick={handleBooking} className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform">Confirm Booking</button>
            </div>

        </div>
    );
};

export default ServiceDetails;