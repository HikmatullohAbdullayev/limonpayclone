import React from 'react';
// import Image from "next/image";
import InternetIcon from '@/assets/icon/InternetIcon';


function Card({id,  children}) {
    return (
        <div key={id} className='relative '> 
            <div className="  flex flex-col justify-center gap-2 items-center py-6 px-4 border border-solid border-gray-500 rounded-xl transiition-all duration-300 hover:bg-[#ffc007] hover:border-transparent  w-[200px] h-[150px]">
                <span><InternetIcon/></span>
                <p className='text-center font-semibold leading-[19px] align-middle'>{children}</p>
                <span className='w-[20px] h-[3px] absolute bottom-0 bg-green-800 block rounded-lg '></span>
            </div>

            
        </div>
    );
}

export default Card;