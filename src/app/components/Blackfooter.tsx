"use client"
import Image from "next/image"
import searchbox from "@/app/assets/searchbox.png"

export default function Blackfooter (){
    return (
      <div className="flex w-[1220px] h-[180px] px-[140px] py-[10px] mr-5 ml-20 mt-8 items-left rounded-xl bg-black">
    
      <div className="grid grid-cols-2">
      <div className="text-left">
        <h1 className="font-integral CF font-bold text-left font-weight-700 gap-2 text-4xl ml-6 mt-7 mb-7 text-white">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        </div>
        <div className="flex flex-col w-3/2">
        <div className="items-right justify-end px-[90px] py-[2px] ml-70 mr-50 mt-2 mb-2">
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

    )
}
        