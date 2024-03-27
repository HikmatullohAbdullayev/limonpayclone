// import Image from "next/image";

import Valyuta from "./sections/Valyuta";
import Util from "./sections/Util";
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
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Intro/>
    <YouTube/>
    <Service/>
    <Limon/>
    <Valyuta/>
    <Util/>
    <Boshqalar/>
    <AppStore/>
    <Rating/>
    <Brend/>


</main>
   
   </>
  );
}
