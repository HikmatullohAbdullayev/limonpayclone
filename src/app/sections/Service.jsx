import React from "react";
// import Card from "../components/Card";
import Image from "next/image";

import Monitor from  "../../assets/img/monitoring.png"
import Trsns from  "../../assets/img/transfer.png"
import Roc from  "../../assets/img/rocket.png"



function Service(props) {
  return (
    <section className=" py-16">
      <div className="container flex items-center  gap-5">
      <div className='text-center flex flex-col gap-4 '> 
            <div className="w-[103px] h-[120px] mx-auto ">
                <Image 
                className='mx-auto lg:mb-[38px] mb-[20px] w-[103px] h-[120px] object-contain'
               
                 src={Monitor}
                  alt="img"/>
            </div>
            <h3 className='font-bold text-[24px]  '>
            Monitoring
            </h3>
            <p className='text-[13px] text-gray-700 max-w-450px] p-2'>
            To`g`ridan-to`g`ri smartfoningizdan pulni boshqarishning eng oson usuli. Dunyoning istalgan joyida. Istalgan vaqtda. Har qanday vaziyatda.
            </p>

            
        </div>
        <div className='text-center flex flex-col gap-4 '>
            <div className="w-[103px] h-[120px]  mx-auto ">
                <Image 
                className='mx-auto lg:mb-[38px] mb-[20px] w-[103px] h-[120px] object-contain'
               
                 src={Trsns}
                  alt="img"/>
            </div>
            <h3 className='font-bold text-[24px]  '>
            To`lovlar
            </h3>
            <p className='text-[13px] text-gray-700 max-w-450px] p-2'>
            Bu jismoniy bank kartalari va naqd puldan ko`ra qulayroq va xavfsizroq, shuningdek do`konlarda to`lovni to`lashda shaxsiy ma`lumotlaringizni himoya qilish imkonini beradi.
            </p>

            
        </div>
        <div className='text-center flex flex-col gap-4 '>
            <div className="w-[103px] h-[120px] mx-auto ">
                <Image 
                className='mx-auto lg:mb-[38px] mb-[20px] w-[103px] h-[120px] object-contain'
              
                 src={Roc}
                  alt="img"/>
            </div>
            <h3 className='font-bold text-[24px]  '>
            Tezkor javob
            </h3>
            <p className='text-[13px] text-gray-700 max-w-450px] p-2'>
            Agar sizga nomaqbul firibgardan qo`ng`iroq kelib tushsa yoki yoqimsiz dasturiy xatolarga duch kelsangiz, iltimos, bizning Call-markazga murojaat qiling. Biz doimo aloqadamiz!
            </p>

            
        </div>
      </div>
    </section>
  )
}

export default Service;
