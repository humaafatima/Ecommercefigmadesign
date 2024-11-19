"use client"
import Image from "next/image"
import versace from "@/app/assets/versace.png"
import zara from "@/app/assets/zara.png"
import gucci from "@/app/assets/gucci.png"
import prada from "@/app/assets/prada.png"
import calvin from "@/app/assets/calvin.png"
export default function Blackborder (){
    return (
      <div className="flex w-[1440px] h-[90px] justify-center items-center bg-black">
      
      <div className="flex row gap-16">
        <Image src={versace} alt="mainimage" width="180" height="150"/>
        <Image src={zara} alt="mainimage" width="180" height="150"/>
        <Image src={gucci} alt="mainimage" width="180" height="150"/>
        <Image src={prada} alt="mainimage" width="180" height="150"/>
        <Image src={calvin} alt="mainimage" width="180" height="150"/>
         </div> 
        </div>
    )
}