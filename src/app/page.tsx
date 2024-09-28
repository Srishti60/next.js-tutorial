"use client";
import React  from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'



export default function Home() {

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
  href:"/register",
}]

const pathname = usePathname();


  return (
    <>
    <h1>Home Page!</h1>
    <Link href={'/blog'}>Blog</Link>
    {
      navLinks.map((item)=>{
        const isActive = pathname.startsWith(item.href);
        
        return (
        <>
        <div className="flex gap-5" key={item.id}>
        <Link href={item.href}>
        <p className={isActive ? "font-bold text-black p-1": "text-blue-400"}>{item.name}</p>
        </Link>
        </div></>
        )
})
    }
    </>
  );
}
