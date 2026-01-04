import React from 'react'
import Card from './Card'
import {useRef} from 'react'


function Foreground(){

    const ref = useRef(null);


    const data = [
    {
        desc:"lorem ipsum react quick watch development amet",
        filesize: "0.9mb",
        close:true,
        tag:{isOpen:false, tagTitle:"Download", tagColor:"green"},
    },
    {
        desc:"lorem ipsum react quick watch development amet",
        filesize: "0.9mb",
        close:true,
        tag:{isOpen:true, tagTitle:"Download", tagColor:"green"},
    },
    {
        desc:"lorem ipsum react quick watch development amet",
        filesize: "0.9mb",
        close:true,
        tag:{isOpen:true, tagTitle:"Upload", tagColor:"blue"},
    },


    ];
    return(

        <div ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, idx) => (
                <Card data={item} reference={ref}/>
            ))}
        </div>
        
    )
}
export default Foreground;