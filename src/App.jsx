import Blogs from "./Components/Bolgs/Blogs"
import Bookmark from "./Components/Bookmark/Bookmark"
import Header from "./Components/Header/Header"

function App() {


  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
