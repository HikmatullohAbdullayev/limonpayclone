import React from 'react';

function YouTube(props) {
    return (
        <section className='pt-[40px] bg-slate-50 '>
            <div className="container flex justify-center items-center gap-4">
            <div className="box ">
            <iframe className='rounded-xl' width="560" height="315" src="https://www.youtube.com/embed/mnKQa3ow4CY?si=4YL4EXW52Zyy8lJP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="box">
            <iframe className='rounded-xl' width="560" height="315" src="https://www.youtube.com/embed/kGD-hYg4ITY?si=KQ2jO8eanIpXAN2t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
            
            
        </section>
    );
}

export default YouTube;