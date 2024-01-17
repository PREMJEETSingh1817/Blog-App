import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page, totalPages, pageHandler} = useContext(AppContext)
  return (
    <div className='border-0 w-full flex justify-center items-center shadow-inner fixed bottom-0 bg-gradient-to-r from-cyan-300 to-blue-800 py-2'>

        <div className='flex justify-between w-11/12 max-w-[670px]'>
                <div className='gap-x-4 flex '>
                  
                    { page===1? (''):(<button className='border rounded-md px-4 py-1 shadow-md' onClick={()=>{
                    pageHandler(page-1);
                    }}>Prev</button>)}
                    {page=== totalPages?(''):(<button className='border rounded-md px-4 py-1 shadow-md' onClick={()=>{
                        pageHandler(page+1);
                    }}>Next</button>)}
                </div>
            <div className='font-bold text-sm'>Pages {page} of {totalPages}</div>
        
        </div>
    </div>
  )
}

export default Pagination