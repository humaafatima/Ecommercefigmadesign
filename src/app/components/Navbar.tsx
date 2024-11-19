"use client"
import Image from "next/image"
import searchbox from "@/app/assets/searchbox.png"
import cart from "@/app/assets/cart.png"

export default function Navbar (){
return <div>
  <nav className="flex sm-grid-col-2 md:grid-col-1 w-[1240px] h-[48px] px-[100px] py-[62px] gap-[40px] justify-between items-center bg-white">
    
    <div className="flex row gap-4 text-black font-integral CF text-5xl font-bold list-none">
        <li>Shop.Co</li>
        </div>
        <div className="flex gap-[24px] w-[321px] h-[22px] justify-between items-right font-satoshi text-black list-none">
  <ul className="flex gap-[24px] w-[321px] h-[22px] justify-between items-right font-satoshi text-wrap text-black">
        <li className="w-[57px] h-[22px] gap-[4px]">Shop</li>
        <li className="w-[56px] h-[22px] gap-[4px]">On Sale</li>
        <li className="w-[87px] h-[22px] gap-[4px]">New Arrivals</li>
        <li className="w-[49px] h-[22px] gap-[4px]">Brands</li>
      </ul>
    
  </div>
  <div className="flex w-[1240px] h-[48px] px-[100px] py-[62px] list-none">
  <Image src={searchbox} alt="searchbox" width="400" height="50" className="w-[300px] h-[58px] px-[16px] py-[20px] ml-12 mb-25" />
  <Image src={cart} alt="cart" width="100" height="100" className="w-[100px] h-[50px] px-[16px] py-[18px] gap-[12px]" />
    
    
    
  </div>
  </nav>
  </div>
  

}