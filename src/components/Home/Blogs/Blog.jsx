import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Blog = ({ blog }) => {
    useEffect(()=>{
        AOS.init();
    },[])

    const { blog_id, title, cover, author, date, description } = blog;
    return (
        <div data-aos="fade-up" className='flex flex-col justify-between'>
            <div>
                <img className='h-60 w-full object-cover' src={cover} alt="" />
            </div>
            <h4 className='text-dark2 tracking-widest mt-5 text-sm'>{date}</h4>
            <h2 className='font-secondary text-3xl text-dark1 font-semibold'>{title}</h2>
            <h3 className='text-dark1 font-secondary text-lg font-bold'>{author}</h3>
            <p className='mt-2 text-dark2'>
                {
                    description.length > 200 ? description.slice(0, 200) : description
                }...
                <Link to={`/blogs/${blog_id}`} className='ml-2 text-blue-700'>Read More</Link>
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: Proptypes.object.isRequired
}

export default Blog;