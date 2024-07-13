import React, { useState } from "react";

const Counter = ({details, handleViewMore, count, total}) => {


  return (
    <div className={`p-14 flex flex-col items-center justify-center max-w-sm ${!details && "mx-auto"} text-center`}>
      <p className="text-xl font-normal text-[#525151]">{`${count} of ${total}`}</p>
      <button
        onClick={() => handleViewMore()}
        className="mt-4  bg-customMarsland text-[#FFFF] px-[110px] py-[12px] font-bold text-center text-nowrap text-base items-center "
      >
        Show more
      </button>
    </div>
  );
};

export default Counter;
