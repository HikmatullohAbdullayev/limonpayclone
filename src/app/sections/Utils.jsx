"use client";
import Image from "next/image";
import React from "react";
import InputMask from "react-input-mask";

import Util from "../../assets/img/utils.png";
import Daraxt from "../../assets/img/daraxt.png";
import Buttons from "../components/Buttons";

function Utils(props) {
  return (
    <section className="bg-slate-50 py-2 my-5">
      <div className="container my-16 flex gap-10  w-full">
        <div className="flex flex-col max-w-[700px]">
          <h2 className="text-[24px] font-bold leading-[33px] text-[#17171C] mb-8">
            Utilitalar
          </h2>
          <div className="flex items-center  gap-10 justify-between lg:justify-start">
            <div className=" ">
              <Image src={Util} alt="img" />
            </div>
            <div className="">
              <Image src={Daraxt} alt="img" />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-start max-w-[600px] bg-slate-100 px-10">
          <h2 className="text-[24px] font-bold leading-[33px] text-[#17171C] mb-8">
            Ekspress to`lov
          </h2>
          <form className="flex flex-col w-full">
            <div className=" flex flex-col w-[530px] mb-6  ">
              <label
                className="font-semibold mb-3  text-[14px] leading-[18px] text-[#2B2B30]"
                htmlFor="tel"
              >
                Telefon raqami
              </label>
              <InputMask mask="+\9\98 (99) 999-99-99" maskChar="_">
                {(inputProps) => (
                  <input
                    className="border-[#E6E9EF]  w-full  placeholder:font-semibold py-[13px] pl-[10px] rounded-[8px] focus:outline-[#ffc007] focus:outline-[1px] border text-[14px] leading-[18px] placeholder:text-[#A5AAB4] transiition-all duration-300"
                    {...inputProps}
                    type="text"
                    name="tel"
                    id="tel"
                    placeholder="+998 (_) ___-__-__"
                  />
                )}
              </InputMask>
            </div>
            <div className=" flex flex-col max-w-[530px] mb-6 ">
              <label
                className="font-semibold mb-3 text-[14px] leading-[18px] text-[#2B2B30]"
                htmlFor="sum"
              >
                To`lov miqdori
              </label>
              <InputMask
                className="border-[#E6E9EF]  placeholder:font-semibold py-[13px] pl-[10px] rounded-[8px] focus:outline-[#ffc007] focus:outline-[1px] border text-[14px] leading-[18px] placeholder:text-[#A5AAB4] transiition-all duration-300"
                mask="9 999 999 999"
                maskChar=" "
                placeholder="10 000"
                value={props.amount}
                onChange={props.onChange}
              >
                {(inputProps) => <input {...inputProps} />}
              </InputMask>
            </div>
            <Buttons pusto={true}>To`lov</Buttons>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Utils;
