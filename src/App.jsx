import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Header/Bookmark/Bookmark'

function App() {
  const [bookmark, setBookmark] = useState([]);
 
  const bookmarkHandler = (blog) => {
      console.log(blog)
      const isExits = bookmark.find(item => item.id === blog.id);
      if(!isExits){
          const newBookmark = [...bookmark, blog];
          setBookmark(newBookmark)
      }
  }
  const handleRemoveBookmark = (item) =>{
      const remained = bookmark.filter(x => x.id !== item.id);
      setBookmark(remained)
  }

  console.log(bookmark)
    return (
    <>
        <div className='max-w-7xl mx-auto'>
          <Header></Header>
          <div className='md:flex gap-5'>
             <Blogs bookmarkHandler = {bookmarkHandler}></Blogs>
            <Bookmark bookmark={bookmark} handleRemoveBookmark={handleRemoveBookmark}></Bookmark>
          </div>
        </div>
    </>
  )
}

export default App
