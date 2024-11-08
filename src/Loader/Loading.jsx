import React from "react";
// import { ThreeCircles } from "react-loader-spinner";
import { Triangle } from "react-loader-spinner";
function Loading() {
  return (
    <div>
      <span className="flex items-center justify-center h-screen text-3xl flex-col font-bold ">
        <Triangle
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        Loading...
      </span>
    </div>
  );
}

export default Loading;
