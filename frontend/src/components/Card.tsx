import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-[290px] h-[290px] bg-card rounded-lg py-10 pl-5 pr-2">
      <div className="flex w-full h-[80px]">
        <Image
          src={
            "https://pyxis.nymag.com/v1/imgs/f6d/b2a/d50cb2e9996542dcf9c0ac7516f32b191a-09-ryan-gosling.rsquare.w700.jpg"
          }
          alt={""}
          className="w-fit h-fit object-contain rounded-full"
          width={50}
          height={50}
        />
        <p className="pt-2 ml-5 text-lg">ESTHER HOWARD</p>
      </div>

      <div className="w-fit h-fit bg-cardAccent rounded-md py-1 px-2">
        <p>Developer</p>
      </div>

      <div className="w-full mt-10">
        <div className="flex">
          <p className="font-semibold">Department : </p>
          <p className="ml-3">Engineering</p>
        </div>
        <div className="flex mt-5">
          <p className="font-semibold">Join Date : </p>
          <p className="ml-3">2023-03-17</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
