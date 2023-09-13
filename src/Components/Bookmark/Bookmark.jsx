
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {

    return (
        <div className="bg-slate-200">
         <h3 className="text-2xl bg-white rounded-xl m-5 p-5">{bookmark.title}</h3>   
        </div>
    );
};
Bookmark.propTypes ={
    bookmark : PropTypes.array.isRequired
}
export default Bookmark;