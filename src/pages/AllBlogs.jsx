import { useLoaderData } from "react-router-dom";
import Blog from "../components/Home/Blogs/Blog";

const AllBlogs = () => {
    const allBlogs = useLoaderData();
    return (
        <div className="md:mx-4 px-4 md:px-8 mt-28 font-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
            {
                allBlogs.map(blog => <Blog key={blog.blog_id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default AllBlogs;