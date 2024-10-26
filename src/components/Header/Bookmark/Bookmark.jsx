import React from 'react';
import { TfiClose } from "react-icons/tfi";
const Bookmark = ({bookmark, handleRemoveBookmark}) => {
    // console.log(handleRemoveBookmark)
    return (
        <>
         <div className='w-1/3 bg-[#1111110D]' >
            {bookmark.map((item, index) => (
                <div className='flex justify-between items-center bg-[#FFFFFF] shadow-lg rounded-lg p-5 m-5' key={index}>
                    <div>
                        <h3 key={index}>{item.title} </h3>
                        <h3>{item.author_name} </h3>
                     </div>
                     <span className='text-2xl' onClick={()=>{handleRemoveBookmark(item)}}><TfiClose /></span>
                 </div>
            ))}
        </div>
        </>
    );
};
export default Bookmark;
