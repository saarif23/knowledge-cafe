import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 text-center my-10 mx-10">
            <h3 className="text-2xl bg-slate-200 p-5 mb-5 text-[#6047EC] font-bold rounded-xl">Spent time  on read : {readingTime} min </h3>
            <div className='bg-slate-200 p-5 rounded-xl '>
                <h3 className="text-2xl font-semibold">Bookmarked Blogs : {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key= {idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;