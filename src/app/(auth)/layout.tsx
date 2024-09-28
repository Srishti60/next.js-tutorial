"use client";
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'

function Authentication({children}:{children:React.ReactNode}) {
   
    const navLinks = [{
        id:1,
        name:"login",
        href:"/login",
      },
    {
      id:2,
      name:"register",
      href:"/register",
    },
    {
      id:3,
      name:"signin",
      href:"/signin",
    }]
    const pathname = usePathname();
  return (
    <div>
      {children}
      <>
      {navLinks.map((item)=>{
        const isActive = pathname.startsWith(item.href);
        
        return (
        <>
        <div className="flex gap-5" key={item.id}>
        <Link href={item.href}>
        <p className={isActive ? "font-bold text-black p-1": "text-blue-400"}>{item.name}</p>
        </Link>
        </div>
        </>
    )
})}
</>
    </div>
  )
}

export default Authentication
