"use client"
import Image from "next/image"
import searchbox from "@/app/assets/searchbox.png"
import footer from "@/app/assets/footer.png"
import rights from "@/app/assets/rights.png"
import payments from "@/app/assets/payments.png"

export default function Footer (){
    return (
        <div className="flex relative flex-col w-[1440px] h-[550px] place-items-center bg-white">
<div className="flex w-[1210px] h-[170px] px-[140px] mr-5 ml-20 mt-8 items-left rounded-xl bg-black">
    
    <div className="grid grid-cols-2">
    <div className="text-left">
      <h1 className="font-integral CF font-bold text-left font-weight-700 gap-2 text-4xl ml-6 mt-8 mb-7 text-white">
      STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      </div>
      <div className="flex flex-col w-3/2">
      <div className="items-right justify-end px-[90px] mt-4 ml-70 mr-50 mb-2">
    <Image src={searchbox} alt="searchbox" width="400" height="50" className="w-[300px] h-[48px] px-[10px] py-[1px] ml-40 mr-50 mt-2 mb-2" />

       <div className="px-[10px] py-[1px] ml-40 mr-50 mt-2 mb-2 w-[1000px] h-[310px] items-right justify-center">
<button
      onClick={() => alert("Button clicked!")}
      className="mr-10 px-2 py-2 w-[280px] h-[46px] font-Inter border-black border-solid rounded-full text-black bg-white">
   Subscribe to Newsletter
    </button>
    </div>
    </div>
    </div> 
    </div>
    </div>
      <div className="flex row w-[1440px] h-[500px] items-center px-[8px] mb-5 mr-10 rounded-md bg-[rgba(242,240,241,1)]">
        <div>
<Image src={footer} alt="footer" width="1230" height="177" className="w-1000 h-300 ml-20 mt-6 mb-5 mr-18 px-[15px] py-[10px]"/>

<div className="grid grid-cols-2">
<Image src={rights} alt="rights" width="270" height="20" className="w-270 h-30 ml-20 mt-2 mb-5 mr-10 px-[16px] py-[10px]"/>
<Image src={payments} alt="payments" width="300" height="40" className="w-300 h-30 ml-20 mt-2 mb-5 mr-18 px-[16px] py-[10px]"/>
      </div>
      </div>
      </div>
      </div>
    )
}