import React from 'react';
import Image from "next/image";
import Buttons from '../components/Buttons';
import HeroImg from "../../assets/img/heroImf.png"

function Intro(props) {
    return (
        <section className='bg-[#17171C] heroBg border-b-8 boder-solid border-[#ffc007]'>
            <div className="flex container pt-[80px]">
                <div className="flex flex-col items-start gap-4">
                    <h1 className='font-bold text-white text-[50px] py-2'>
                    LimonPay - biz sizga kerak bo`lgan narsani qila olamiz 
                    <span className='text-green-900'> :)</span>
                    </h1>
                    <p className=' text-white text-[20px]'>
                    Biz orqali siz butun mamlakat bo`ylab pul o`tkazishingiz va to`lovlarni qulay va xavfsiz tarzda amalga oshirishingiz mumkin. Xaridlar uchun veb-saytimiz va mobil ilovamiz orqali to`lang.
                    </p>
                    <div className="flex gap-3">
                        <Buttons primary={true}>Ko`proq o`rganing</Buttons>
                        <Buttons secondary={true}>Hisobingizga kiring</Buttons>
                       
                    </div>
                </div>
                <div className="">
                    <Image src={HeroImg} alt="hero" />
                </div>
            </div>
            
        </section>
    );
}

export default Intro;