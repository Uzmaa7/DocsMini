import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({data, reference}){
    return(
         <motion.div drag dragConstraints={reference} dragElastic={0.1} className=' relative flex-shrink-0 w-60 h-72  rounded-[45px] bg-zinc-900/90 text-white py-10 px-5 overflow-hidden'>
            <FaRegFileAlt/>
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full   left-0 '>
                <div className='flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-6 h-6 rounded-full bg-zinc-600 flex items-center justify-center'>
                        {data.close ? <IoCloseCircleSharp/> : <GoDownload  color='#fff' size='0.7em'/>} 
                    </span>

                </div>
                {data.tag.isOpen && 
                    (<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>)
                } 

            </div>
         </motion.div>
    )
}
export default Card;