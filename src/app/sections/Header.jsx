import InternetIcon from "@/assets/icon/InternetIcon";
import LogoIcon from "@/assets/icon/LogoIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Apple from "../../assets/img/applestore.png";
import Google from "../../assets/img/googleplay.png";

function Header(props) {
  return (
    <>
      <header className="bg-[#17171C] ">
        <div className=" flex justify-between items-center max-w-[1240px] mx-auto px-[20px] border-b border-gray-600 py-[34px] ">
          <div className="flex">
            <div className="w-[300px]">
              <span className="w-full ">
                <LogoIcon />
              </span>
            </div>

            <nav>
              <ul className="flex gap-5 ">
                <li>
                  <Link href="/" className=" text-white font-semibold text-2xl">
                    Loyha haqida
                  </Link>
                </li>
                <li>
                  <Link href="/" className=" text-white font-semibold text-2xl">
                    Yangiliklar
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex justify-between gap-5">
            <div className="flex justify-between items-center gap-5 py-4 px-2 border border-gray-400 rounded-xl">
              <span className="text-white">
                <InternetIcon />
              </span>
              <p className="text-white">O`zbekcha</p>
            </div>
            <div className="flex justify-between items-center gap-5">
              <span className="p-1 border border-gray-400 rounded-xl">
                <Link href="/">
                  <Image src={Apple} alt="apple" />
                </Link>
              </span>
              <span className="p-1 border border-gray-400 rounded-xl">
                <Link href="/">
                  <Image src={Google} alt="google" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
