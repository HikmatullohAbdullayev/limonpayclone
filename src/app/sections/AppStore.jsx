import React from "react";
import Image from "next/image";
import App from "../../assets/img/applestore.png";
import Google from "../../assets/img/googleplay.png";
import phone from "../../assets/img/qurilmalar.png";

function AppStore(props) {
  return (
    <section className="container flex justify-between mt-[200px]">
      <div className=" rounded-2xl w-full bg-yellow-500 px-5 relative ">
        <div className="flex flex-col justify-between">
          <p className="mt-10 font-bold text-3xl text-black">
            Qurilmangiz uchun ilovani yuklab oling
          </p>
          <p className="pt-5 text-xl">
            Dastur iOS, Android tizimlarini qo`llab-quvvatlaydi.
          </p>
          <div className="flex gap-8 my-8">
            <div>
              <Image className="rounded-lg" src={App} alt="img" />
            </div>
            <div>
              <Image className="rounded-lg" src={Google} alt="img" />
            </div>
          </div>
        </div>
        <div className="w-[400px] absolute top-[-143px] right-0 ">
        <Image className="" src={phone} alt="img" />
      </div>
      </div>
     
    </section>
  );
}

export default AppStore;
