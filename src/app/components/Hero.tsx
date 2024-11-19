"use client"
import Image from "next/image"
import mainimagee from "@/app/assets/mainimagee.png"
import Frame57 from "@/app/assets/Frame57.png"
import Vector from "@/app/assets/Vector.png"

export default function Hero (){
    return (
      <div className="flex w-[1440px] h-[633px] justify-between place-items-center px-8 py-4 gap-4 bg-[rgba(242,240,241,1)]">

        <div className="flex w-1/2">
        <div className="text-left px-8 py-4 mb-4">
        <h1 className="font-integral CF font-bold text-left px-8 py-4 mb-4 font-weight-700 text-6xl text-black">
        FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <div className="text-left px-8 py-4 mb-4">
        <p className="font-satoshi font-2xl text-left text-black">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        </div>
        <div className="px-8 py-4 mb-4 w-[219px] h-[63px]">
<button
        onClick={() => alert("Button clicked!")}
        className="mr-10 px-5 py-5 w-[219px] h-[63px] font-Inter border-1px solid rounded-full text-white bg-black">
     Shop Now
      </button>
      </div>
      <div className="flex row px-8 py-9">
        <Image src={Frame57} alt="stats" width="500" height="550" className="w-[500px] h-[50px]"/>
         
         </div> 
        </div>
         </div>
         
         <div className="justify-right py-5 px-10 gap-5 mb-10 mt-50 mr-10">
         <Image src={Vector} alt="vector" width="70" height="70" className="w-[56px] h-[56px] justify-right"/>
         </div>
        <div className="flex w-1/2">
      <div className="justify-center">
        <Image src={mainimagee} alt="mainimage" width="1440" height="700" className="w-[1440px] h-[633px]"/>
         </div> 
         <div className="justify-center py-5 mb-80">
         <Image src={Vector} alt="vector" width="200" height="150" className="w-[104px] h-[104px] justify-center"/>
         </div>
        </div>
        </div>
        
    )
}
