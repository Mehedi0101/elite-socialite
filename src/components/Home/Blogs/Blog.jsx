import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const { blog_id, title, cover, author, date, description } = blog;
    return (
        <div>
            <div>
                <img className='h-60 w-full object-cover' src={cover} alt="" />
            </div>
            <div>
                <h4 className='text-dark2 tracking-widest mt-5 text-sm'>{date}</h4>
                <h2 className='font-secondary text-3xl text-dark1 font-semibold'>{title}</h2>
                <h3 className='text-dark1 font-secondary text-lg font-bold'>{author}</h3>
                <p className='mt-2 text-dark2'>
                    {
                        description.length > 200 ? description.slice(0,200) : description
                    }...
                    <Link className='ml-2 text-blue-700'>Read More</Link>
                </p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: Proptypes.object.isRequired
}

export default Blog;