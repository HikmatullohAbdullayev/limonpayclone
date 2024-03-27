// import Image from "next/image";

import Valyuta from "./sections/Valyuta";
import Utils from "./sections/Utils";
import Intro from "./sections/Intro";
import Limon from "./sections/Limon";
import Service from "./sections/Service";
import YouTube from "./sections/YouTube";
import Boshqalar from "./sections/Boshqalar";
import AppStore from "./sections/AppStore";
import Rating from "./sections/Rating";
import Brend from "./sections/Brend";

export default function Home() {
  return (
   <>
   <main className="">
    <Intro/>
    <YouTube/>
    <Service/>
    <Limon/>
    <Valyuta/>
    <Utils/>
    <Boshqalar/>
    <AppStore/>
    <Rating/>
    <Brend/>


</main>
   
   </>
  );
}
