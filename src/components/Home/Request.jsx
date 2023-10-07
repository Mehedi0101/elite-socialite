const Request = () => {
    return (
        <div className="font-primary md:mx-4 px-4 md:px-8 mt-28">
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold font-secondary text-center mb-10 text-dark1'>Make an Event Request</h2>
            <div>
                <div className="flex flex-col md:flex-row gap-x-14 gap-y-5 justify-between">
                    <input className="border border-dark3 w-full md:w-1/2 px-5 py-3 outline-none rounded placeholder:text-dark3" type="text" name="name" placeholder="Name" />
                    <input className="border border-dark3 w-full md:w-1/2 px-5 py-3 outline-none rounded placeholder:text-dark3" type="email" name="email" placeholder="Email" />
                </div>
                <div>
                    <textarea placeholder="Message" className="border border-dark3 w-full px-5 py-3 mt-10 outline-none resize-none rounded placeholder:text-dark3" name="" id="" cols="30" rows="7"></textarea>
                </div>
                <button className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform mx-auto block mt-5 md:mt-10">Get In Touch</button>
            </div>
        </div>
    );
};

export default Request;