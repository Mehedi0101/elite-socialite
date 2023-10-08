import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data.slice(0,2)))
    },[])

    return (
        <>
        <div className="md:mx-4 px-4 md:px-8 mt-28 font-primary grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {
                blogs.map(blog => <Blog key={blog.blog_id} blog={blog}></Blog>)
            }
        </div>
        <button className="bg-primary text-white px-5 py-2 rounded font-medium active:scale-95 transition-transform mx-auto block mt-5 md:mt-10">Show All</button>
        </>
    );
};

export default Blogs;