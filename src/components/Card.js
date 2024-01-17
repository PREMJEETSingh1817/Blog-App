import React from 'react'
import './Card.css'
export function Card ({post}) {
  return (
    <div>
        <p className='font-bold text-lg'>{post.title}</p>
        <p className='text-sm'>
            By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
        </p>
        <p className='text-sm mt-[4px]'>
            Posted On {post.date}
        </p>
        <p className='text-md mt-[14px] '>{post.content}</p>
        <div className='flex gap-x-3'>
            {
                post.tags.map((tag,index)=>{
                    return <span key = {index} className='text-blue-950 font-bold underline text-[8px] mt-[5px]'>
                        {`#${tag}`}
                    </span>
                })
            }
        </div>
    </div>
  )
}
