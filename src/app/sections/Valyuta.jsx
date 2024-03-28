import Image from "next/image";
import React from "react";
import Rasm from "../../assets/img/kurslar.png";
import ValIcon from "@/assets/icon/ValIcon";
import Transform from "@/assets/icon/Transform";



function Valyuta(props) {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <h3 className="md:text-[24px] text-[18px] font-bold lg:leading-[33px] leading-[24px] text-[#17171C] exchange_title">Valyuta kursi</h3>
            <div class="flex justify-between items-center">
              <span class="text-[#A5AAB4] leading-[21px] based_span hidden md:block mr-2">
                Asosida:
              </span>
              <ValIcon/>
              <h3 class="lg:text-[13px] text-[10px] font-semibold lg:leading-[13px] leading-[10px] text-[#17171C] ml-2 w-[200px] central_bank">
                O`zbekiston Respublikasi Markaziy banki
              </h3>
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 gap-5 grid-cols-1 items-stretch">
            
            <div className="bg-slate-50">
                <div className="flex ">
                    <input className=" focus:outline-none lg:text-[34px] text-[18px] w-full exchange_input leading-[49px] font-bold text-[#A5AAB4] bg-transparent" placeholder="0" type="text" name="uzb" id="uzb" />
                    <label className="text-[20px] leading-[27px] font-bold ml-[10px]" htmlFor="uzb">uzb</label>
                </div>
                    <div className="mx-auto ">
                    <span className="p-2 rounded-lg bg-[#E6E9EF] mx-6 lg:mt-3 mt-5">
                    
                    <Transform/>
                    </span>
                    </div>
                <div className="flex">
                    
                    <input className=" focus:outline-none lg:text-[34px] text-[18px] w-full exchange_input leading-[49px] font-bold text-[#A5AAB4] bg-transparent" placeholder="0.00" type="text" name="usd" id="usd" />
                    <label className="text-[20px] leading-[27px] font-bold ml-[10px]" htmlFor="usd">usd</label>
                </div>
            </div>
            <div className="img">
              <Image src={Rasm} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Valyuta;
