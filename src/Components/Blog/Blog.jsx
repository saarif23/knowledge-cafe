import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog)
    const {id, cover_img, author, author_img, reading_time, title, hashtags
    } = blog;

    return (
        <div className='space-y-5 my-10 '>
            <img className='w-full rounded-lg ' src={cover_img} alt="" />
            <div className='flex justify-between  items-center'>
                <div className='flex gap-5'>
                    <img className=' w-12 ' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl font-semibold">{author}</h3>
                        <p>Mar 14 (4 day age) </p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className='text-3xl font-bold pb-3'>Title : {title} </h3>
            {
                hashtags.map((hash, idx) => <span className='p-2' key={idx}> #{hash}</span>)
            } <br />
            <button className='text-[#6047EC] underline' onClick={() => handleMarkAsRead(id,reading_time)}>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired

}
export default Blog;