"use client"
export default function Button (){
    return ( 
<div className="flex px-8 py-5 mb-4 mt-40 w-[1440px] h-[310px] items-center justify-center">
<button
        onClick={() => alert("Button clicked!")}
        className="mr-10 px-5 py-5 w-[219px] h-[63px] font-Inter border-black border-solid border-b-black rounded-full text-black bg-white">
     Shop Now
      </button>
      </div>
    )
}