import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Support = () => {
    document.title = "Support";
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        
        Swal.fire(
            'Feedback Received',
            'One of our team member will reach to you soon',
            'success',
        )
        navigate('/');
    }

    return (
        <form  onSubmit={handleSubmit} className="font-primary md:mx-4 px-4 md:px-8 mt-10 lg:mt-20 text-dark1 text-sm md:text-base">
            <h2 className="text-center font-secondary font-bold text-3xl md:text-4xl lg:text-5xl text-dark1 mb-2 md:mb-6 lg:mb-10">How can we help?</h2>
            <input className="w-[500px] max-w-full mx-auto block border border-dark3 px-5 py-3 outline-none rounded placeholder:text-dark3 mb-5" placeholder="Name" type="text" name="name" defaultValue={currentUser.displayName} />
            <input className="w-[500px] max-w-full mx-auto block border border-dark3 px-5 py-3 outline-none rounded placeholder:text-dark3 mb-5" placeholder="Email" type="email" name="email" defaultValue={currentUser.email} />
            <select className="select select-bordered w-[500px] max-w-full mx-auto block border border-dark3 px-5 py-3 focus:outline-none rounded placeholder:text-dark3 text-sm md:text-base mb-5" defaultValue="Select a topic" required>
                <option disabled>Select a topic</option>
                <option>Service Inquiry</option>
                <option>Pricing</option>
                <option>Payment Method</option>
                <option>Customization</option>
                <option>Suggestion</option>
                <option>Complain</option>
            </select>
            <div className="w-[500px] max-w-full mx-auto block">
                <textarea className="w-full border border-dark3 px-5 py-3 outline-none rounded placeholder:text-dark2 resize-none" placeholder="Please explain your issue" name="support-box" id="support-box" cols="30" rows="8" required></textarea>
            </div>
            <button className='px-5 py-2 bg-primary rounded text-white active:scale-95 transition-transform font-medium mb-3 block mx-auto mt-5'>Submit</button>
        </form>
    );
};

export default Support;