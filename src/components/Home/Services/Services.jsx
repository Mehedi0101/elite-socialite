import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData();

    return (
        <div className="font-primary md:mx-4 px-4 md:px-8 mt-28">
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold font-secondary text-center mb-10 text-dark1'>Our Services</h2>
            <div>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;