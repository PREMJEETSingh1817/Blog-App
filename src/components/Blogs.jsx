import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'
import { Card } from './Card'

const Blogs = () => {
    const {posts,loading} = useContext(AppContext)
    
  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-8'>
{
    loading ?(<Spinner/>):(
        posts.length ===0 ?(<div>
            <p>No posts Found</p>
        </div>):(
            posts.map((post)=>(<Card key={post.id} post={post}/>))
        )
    )
}
    </div>
  )
}

export default Blogs