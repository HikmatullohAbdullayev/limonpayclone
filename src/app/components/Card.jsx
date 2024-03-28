import React from 'react';
import Image from "next/image";


function Card({img,title , text}) {
    return (
        <div className='text-center flex flex-col gap-4 '> 
            <div className="w-[103px]  mx-auto ">
                <Image 
                className='w-full'
                width="100"
                height="100"
                 src={img}
                  alt="img"/>
            </div>
            <h3 className='font-bold text-[24px]  '>
           { title}
            </h3>
            <p className='text-[13px] text-gray-700 max-w-450px] p-2'>
            {text}
            </p>

            
        </div>
    );
}

export default Card;