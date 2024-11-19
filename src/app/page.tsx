"use client"
import Navbar from "@/app/components/Navbar"
import Blackbar from "@/app/components/Blackbar"
import Hero from "@/app/components/Hero"
import Blackborder from "@/app/components/Blackborder"
import Products from "@/app/components/Products"
import Topselling from "@/app/components/Topselling"
import Dressstyle from "@/app/components/dressstyle"
import Button from "@/app/components/Button"
import Customers from "@/app/components/Customers"
import Footer from "@/app/components/Footer"

export default function Home () {
  return <div className="h-screen w-screen bg-white">
    <Blackbar/>
<Navbar/>
<Hero/>
<Blackborder/>
<Products/>
<Button/>
<Topselling/>
<Button/>
<Dressstyle/>
<Customers/>

<Footer/>
    </div>
}