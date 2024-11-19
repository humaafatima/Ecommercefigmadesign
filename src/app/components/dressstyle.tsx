"use client"
import Image from "next/image"
import dressstyle from "@/app/assets/dressstyle.png"

export default function Dressstyle (){
    return (

      <div className="flex w-[1440px] h-[800px] justify-between place-items-center px-[6px] py-[20px] bg-white">
    
        
<div className="flex w-[1240px] h-[850px] px-[120px] py-[30px] gap-[60px] ml-8 mr-4 mt-10">
  <Image src={dressstyle} alt="dressstyle" width="1450" height="900" className="w-[1440px] h-[900px] px-[10px] py-[60px] gap-[18px]" />
  
  </div>
 </div>
  
      
    )
}