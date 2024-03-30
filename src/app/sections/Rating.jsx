import React from "react";

function Rating(props) {
  return (
    <div>
      <div className="container mx-auto mt-20 ">
        <div className="flex justify-between gap-5 mb-10 ">
          <div className="flex w-[50%] justify-between rounded-lg border bg-slate-100  ">
            <div className="my-10 ml-10">
              <i className=" fa-brands fa-apple mb-20 text-[25px]"></i>
              <p>Reyting</p>
              <h4 className="text-2xl font-bold">App store</h4>
            </div>
            <div className="my-10 mr-10">
              <div className="flex mb-20"></div>
              <div>
                <h1 className="text-4xl font-bold text-yellow-500">
                  4.9 <span className="text-xs text-black ">5 Dan</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex w-[50%] justify-between rounded-lg border bg-slate-100  ">
            <div className="my-10 ml-10">
              <i className=" fa-brands fa-google-play mb-20 text-[25px]"></i>
              <p>Reyting</p>
              <h4 className="text-2xl font-bold">Google play</h4>
            </div>
            <div className="my-10 mr-10">
              <div className="flex mb-20"></div>
              <div>
                <h1 className="text-4xl font-bold text-yellow-500">
                  4.6 <span className="text-xs text-black ">5 Dan</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
