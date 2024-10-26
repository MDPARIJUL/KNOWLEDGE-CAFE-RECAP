import React, { useEffect, useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
const Blogs = ({bookmarkHandler}) => {
    // console.log(bookmarkHandler)
    const [blogs, setBlogs] = useState([]);
    // console.log(blogs)
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(datas => setBlogs(datas))
    },[])
    
    return (
        <>
            <div className='w-2/3'>
                {blogs.map(((blog, index) => (
                    <div key={index} className='max-w-5xl space-y-4 mb-5'>
                        <img src={blog.cover_photo} className='cover-img'></img>
                        <div className='flex justify-between items-center'> 
                            <div className='flex gap-4 items-center'>
                                <img src={blog.author_img} alt="" className='author-img' />
                                <div>
                                    <h3 className='font-bold text-2xl text-[#111111]'>{blog.author_name} </h3>
                                    <h3 className='text-xs font-semibold text-[#11111199]'>{blog.published_date} </h3>
                                </div>    
                            </div>
                            <div className='flex items-center gap-4'>
                                <span> {blog.reading_time} read  </span>
                                <button onClick={()=>{bookmarkHandler(blog)}}>  <FaRegBookmark /></button>
                            </div>
                        </div>
                        <p className='font-bold text-4xl text-[#111111]'>{blog.description} </p>
                        <p className='flex gap-5'>
                            {blog.hashtags.map((has, idx) => 
                                <span key={idx} className='text-2xl font-normal text-[#11111199]'>{has} </span>
                             )} 
                        </p>
                        <span><a href='#'>mark as read </a> </span> 
                    </div>
                )))}
            </div>
        </>
    );
};

export default Blogs;