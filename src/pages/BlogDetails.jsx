import { RiArrowGoBackFill } from "react-icons/ri";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
    const blogs = useLoaderData();
    const { blogId } = useParams();
    const { title,author,cover,date,description } = blogs.find(blog => blog.blog_id === Number(blogId));
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/blogs');
    }

    return (
        <div className="font-primary md:mx-4 px-4 md:px-8 text-dark2 text-sm md:text-base mt-10 lg:mt-20">
            <h1 className="text-center font-secondary font-bold text-3xl md:text-4xl lg:text-5xl text-dark1 mb-2 md:mb-6 lg:mb-10">{title}</h1>
            <img className="max-w-full mx-auto mb-5 md:mb-10" src={cover} alt="" />
            <p className="mb-5 md:mb-10 text-justify">{description}</p>
            <h3 className='text-dark1 font-secondary font-bold text-2xl'>{author}</h3>
            <h4 className='text-dark1 font-secondary tracking-widest mt-2 text-lg'>{date}</h4>
            <button onClick={handleGoBack} className="text-primary font-semibold active:scale-95 transition-transform flex items-center gap-1 mt-10"><RiArrowGoBackFill className="text-xl" />Go Back</button>
        </div>
    );
};

export default BlogDetails;