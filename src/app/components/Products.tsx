"use client"
import Image from "next/image"
import new1 from "@/app/assets/new1.png"
import new2 from "@/app/assets/new2.png"
import new3 from "@/app/assets/new3.png"
import new4 from "@/app/assets/new4.png"
import star1 from "@/app/assets/star1.png"
import star2 from "@/app/assets/star2.png"
import $240 from "@/app/assets/$240.png"
import $130 from "@/app/assets/$130.png"

export default function Products (){
    return (

      <div className="flex col w-[1440px] h-[300px] justify-between place-items-center px-8 bg-white">
        <div className="text-center px-8 mt-10 mb-8">
        <h1 className="font-integral CF font-bold text-center px-8 py-2 font-weight-700 text-5xl text-black">
        NEW ARRIVALS
        </h1>

<div className="grid grid-cols-4 w-[1240px] h-[48px] px-[100px] py-[20px] mb-30 mt-15 gap-5">
<div>
  <Image src={new1} alt="greytshirt" width="500" height="500" className="w-[300px] h-[300px] px-[16px] py-[18px] gap-[12px]" />
  <p className="mt-2 text-left text-xs font-bold">T-Shirt With Tape Deatils</p>
  <Image src={star1} alt="rating4" width="100" height="50" className=""/>
  <p className="mt-2 text-left text-xs font-bold">$120</p>
  </div>
  <div>
  <Image src={new2} alt="bluejeans" width="500" height="500" className="w-[300px] h-[300px] px-[16px] py-[18px] gap-[12px]" />
  <p className="text-left text-xs">Skinny Fit Jeans</p>
  <Image src={star2} alt="rating3" width="100" height="50" className=""/>
  <Image src={$240} alt="price" width="100" height="50" className=""/>
  </div>
  <div>
  <Image src={new3} alt="cheqshirt" width="500" height="500" className="w-[300px] h-[300px] px-[16px] py-[18px] gap-[12px]" />
  <p className="text-left text-xs">Checkered Shirt</p>
  <Image src={star1} alt="rating4" width="100" height="50" className=""/>
  <p className="mt-2 text-left text-xs font-bold">$180</p>
  </div>
  <div>
  <Image src={new4} alt="orangetshirt" width="500" height="500" className="w-[300px] h-[300px] px-[16px] py-[18px] gap-[12px]" />
  <p className="text-left text-xs">Sleeves Striped T-SHIRT</p>
  <Image src={star1} alt="rating4" width="100" height="50" className=""/>
  <Image src={$130} alt="price" width="100" height="50" className=""/>
  </div>
  </div>
  </div>
   </div>

    
 
      
    )
}