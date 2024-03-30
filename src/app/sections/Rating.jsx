///
import React from 'react';
import Image from "next/image";
import appLogo from "../../assets/img/applelogo.png"
import googleLogo from "../../assets/img/googleplaylogo.png"
import Ster from "../../assets/img/stars.png"

///

function Rating(props) {
    return (
        <section>
             <div className="container  mt-20 ">
      <div className="flex justify-between gap-5 mb-10 ">
        <div className="flex w-[500px] justify-between rounded-lg   bg-slate-100  ">
          <div className="py-10 px-10 w-full flex flex-col gap-8 justify-between ">
            <div className="flex justify-between items-center gap-4 w-full">
            <div className="img">
            <Image className="inline-block" src={appLogo} alt="apple"/>
            </div>
            <div className="star">
                <Image className="inline-block" src={Ster} alt="star"/>
            </div>
            </div>
            <div className="flex justify-between w-full">
            <div className="">
            <p className="text-gray-600">Reyting</p>
            <p className="text-2xl font-bold">App store</p>
            </div>
          <div className="">
           
            <div>
              <p className="text-xl font-bold text-yellow-500">
                <span className=" text-[58px]">4.9</span> 5 Dan
              </p>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className="flex w-[500px] justify-between rounded-lg   bg-slate-100  ">
          <div className="py-10 px-10 w-full flex flex-col gap-8 justify-between ">
            <div className="flex justify-between items-center gap-4 w-full">
            <div className="img">
            <Image className="inline-block" src={googleLogo} alt="apple"/>
            </div>
            <div className="star">
                <Image className="inline-block" src={Ster} alt="star"/>
            </div>
            </div>
            <div className="flex justify-between w-full">
            <div className="">
            <p className="text-gray-600">Reyting</p>
            <p className="text-2xl font-bold">Google play</p>
            </div>
          <div className="">
           
            <div>
              <p className="text-xl font-bold text-yellow-500">
                <span className=" text-[58px]">4.9</span> 5 Dan
              </p>
            </div>
          </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
    </section>
    );
}

export default Rating;