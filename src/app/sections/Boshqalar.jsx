import Link from 'next/link';
import React from 'react';
import Card from '../components/Card';

function Boshqalar(props) {

    const data = [
        {
            id:1,
            text:"Internet xizmatlarini ko'rsatuvchi provayderlar"
        },
        {
            id:2,
            text:"Televidenie va onlayn efir"
        },
        {
            id:3,
            text:"Sug'urta"
        },
        {
            id:4,
            text:"O'yinlar & Ijtimoiy media"
        },
        {
            id:5,
            text:"Xosting-provayderlar"
        },
        {
            id:6,
            text:"Havo va temir yo'l chiptalari"
        },
    ]
    return (
        <section>
            <div className="container">
                <div className="top">
                    <h2 className='text-[19px] lg:text-[24px] font-bold leading-[33px] text-[#17171C] '>
                    Boshqa turkumlar
                    </h2>
                    <Link href="/" className=' font-medium text-[16px] lg:text-[20px] text-[#A5AAB4] leading-[27px] ease-in duration-300  hover:text-[#ffc007]'>
                    Barcha toifalar
                    </Link>
                </div>
                <div className="flex gap-4">
                    {
                        data.map((item) => (
                            <>
                            <Card  id={item.id}>
                                {item.text}
                            </Card>
                            </>
                        ))
                    }
                </div>
            </div>
            
        </section>
    );
}

export default Boshqalar;