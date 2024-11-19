"use client"
import Image from "next/image"
import greenshirt from "@/app/assets/greenshirt.png"
import tshirt from "@/app/assets/tshirt.png"
import shorts from "@/app/assets/shorts.png"
import pant from "@/app/assets/pant.png"
import rating4 from "@/app/assets/rating4.png"
import rating3 from "@/app/assets/rating3.png"
import star1 from "@/app/assets/star1.png"
import twentypc from "@/app/assets/twentypc.png"

export default function Topselling (){
    return (

      <div className="flex w-[1440px] h-[200px] justify-between place-items-center px-8 bg-white">
        <div className="text-left px-8">
        <h1 className="font-integral CF font-bold text-center px-8 font-weight-700 text-5xl text-black">
        TOP SELLING
        </h1>
        
  <div className="grid grid-cols-4 w-[1240px] h-[48px] px-[100px] py-[10px] mb-2 mt-2 gap-5">
    <div>
  <Image src={greenshirt} alt="searchbox" width="500" height="500" className="w-[300px] h-[300px] px-[16px] py-[18px] gap-[12px]" />
  <p className="mt-2 text-left text-xs">T-Shirt With Tape Deatils</p>
  <Image src={rating4} alt="rating5" width="100" height="50"/>
  <p className="mt-2 text-left text-xs font-bold">$212 <span className="text-gray-500 font-bold">$232</span>
  <Image src={twentypc} alt="discount" width="30" height="30"/></p>
  </div>
  <div>
  <Image src={tshirt} alt="cart" width="500" height="500" className="w-[300px] h-[300px] px-[16px] py-[18px] gap-[12px]" />
  <p className="mt-2 text-left text-xs">T-Shirt With Tape Deatils</p>
  <Image src={rating3} alt="rating4" width="100" height="50"/>
  <p className="mt-2 text-left text-xs font-bold">$145</p>
  </div>
  <div>
  <Image src={shorts} alt="cart" width="500" height="500" className="w-[300px] h-[300px] px-[16px] py-[18px] gap-[12px]" />
  <p className="mt-2 text-left text-xs">T-Shirt With Tape Deatils</p>
  <Image src={rating4} alt="rating3" width="100" height="50"/>
  <p className="mt-2 text-left text-xs font-bold">$80</p>
  </div>
  <div>
  <Image src={pant} alt="cart" width="500" height="500" className="w-[300px] h-[300px] px-[16px] py-[18px] gap-[12px]" />
  <p className="mt-2 text-left text-xs">T-Shirt With Tape Deatils</p>
  <Image src={star1} alt="rating4" width="100" height="50"/>
  <p className="mt-2 text-left text-xs font-bold">$210</p>
  </div>
  <div>
  </div>
 </div>
  </div>
      </div>
    )
}