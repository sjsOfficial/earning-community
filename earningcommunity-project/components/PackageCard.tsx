import Link from "next/link";
import React from "react";

const PackageCard=()=> {
  return (
    <div className="max-w-[380px] bg-orange-500 rounded-[10px] p-[32px] flex flex-col items-center gap-4 mx-2">
      <h1 className="text-[20px] md:text-[24px] font-medium text-[#FFFFFF]">Play Package</h1>
      <div className="text-center">
        <p className="text-[18px] md:text-[20px] font-medium text-[#FFFFFF]">200 ৳</p>
        <p className="text-[18px] md:text-[20px] font-medium text-[#FFFFFF]">3 months</p>
      </div>
      <p className="text-[16px] md:text-[20px] text-[#FFFFFF] text-justify">
        Unlock a world of possibilities with our affordable and flexible
        package. For just 200 BDT, you will gain access to our platform for a full
        three months, giving you ample time to explore, learn, and grow. Whether
        you are looking to enhance your skills, dive into new hobbies, or simply
      </p>
      <Link className="w-full" href='/'>
        <div className="py-2 text-center bg-[#2E4053] rounded-[10px] text-[16px] md:text-[20px] text-[#FFFFFF]">
        Purchase Now
        </div>
      </Link>
    </div>
  );
}
export default PackageCard