import { useState } from "react"
import Blogs from "./Components/Bolgs/Blogs"

import Header from "./Components/Header/Header"
import Bookmarks from "./Components/Bookmarks/Bookmarks";
// import PropTypes from 'prop-types'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  };
  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + parseFloat(time))
    // remove the read blog from the bookmark
    // console.log('Remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <div className="bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <Header></Header>
          <div className="md:flex">
            <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
            <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
