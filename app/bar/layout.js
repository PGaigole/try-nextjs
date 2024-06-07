import React from "react";
import Image from "next/image";

const BarLayout = ({ children }) => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="https://www.theknot.com/tk-media/images/e1ed4b7e-777c-11e4-843f-22000aa61a3e~rs_1458.h"
            className="max-w-full lg:max-w-sm rounded-lg shadow-2xl"
            width={600}
            height={400}
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to our bar</h1>
            <p>Feel free to grab some drinks for yourself</p>
            <button className="btn btn-primary">Let's get some!</button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default BarLayout;
