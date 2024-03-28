import React from 'react';
import Image from "next/image";
import Buttons from '../components/Buttons';
import Yostiq from "../../assets/img/yostiqcha.png"

function Limon(props) {
    return (
        <section className='bg-slate-50'>
           <div className="container flex  flex-col-reverse md:flex-row items-center justify-between">
           <div className="box1">
                <h3 className='font-bold leading-[44px] lg:text-[32px] text-[32px] mb-4'>
                    Limon Pay
                </h3>
                <p className='text-[#2B2B30] lg:text-[20px] text-[18px] leading-[26px] font-regular mb-8 md:max-w-[80%]'>
                Biz orqali siz butun mamlakat bo`ylab pul o`tkazishingiz va to`lovlarni qulay va xavfsiz tarzda amalga oshirishingiz mumkin. Xaridlar uchun veb-saytimiz va mobil ilovamiz orqali to`lang.
                </p>

                <Buttons primary={true}>
                Ko`proq o`rganing
                </Buttons>
            </div>
            <div className="box">
                <div className="w-[426px] h-[362px]">
                    <Image className=' w-full  object-contain' src={Yostiq} alt="img"/>
                </div>
            </div>
           </div>
        </section>
    );
}

export default Limon;