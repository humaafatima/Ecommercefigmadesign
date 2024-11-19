"use client"
import Image from "next/image"
import customer1 from "@/app/assets/customer1.png"
import customer2 from "@/app/assets/customer2.png"
import customer3 from "@/app/assets/customer3.png"

export default function Customers() {
    return (

      <div className="flex w-[1440px] h-[500px] justify-left place-items-center ml-5 mr-8 px-[8px] py-[20px] bg-white">
        <div className="text-left px-8">
        <h1 className="font-integral CF font-bold text-left px-[100px] py-[10px] font-weight-700 ml-5 mr-8 mb-2 mt-4 text-5xl text-black">
       OUR HAPPY CUSTOMERS
        </h1>
        
        <div className="grid grid-cols-3 w-[1240px] h-[48px] px-[100px] py-[20px] mb-5 mt-5 gap-5">
          <div>
        <Image src={customer1} alt="customerfeedback" width="350" height="200" className="px-[16px] py-[18px] gap-[12px]"/>
    </div>
    <div>
        <Image src={customer2} alt="customerfeedback" width="350" height="500" className="px-[16px] py-[18px] gap-[12px]" />
    </div>
    <div>
        <Image src={customer3} alt="customerfeedback" width="350" height="500" className="px-[16px] py-[18px] gap-[12px]" />
    </div>
        </div>
        </div>
        </div>
    )
        }