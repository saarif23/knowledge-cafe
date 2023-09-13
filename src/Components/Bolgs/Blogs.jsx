import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <h3 className="text-3xl">Blog :  {blogs.length} </h3>
        </div>
    );
};

export default Blogs;