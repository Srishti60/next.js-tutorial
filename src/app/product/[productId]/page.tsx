import React from 'react'
import type { Metadata } from "next";

type Props = { params: {productId:string;} }

export function generateMetadata ({params}:Props): Metadata {
  return{
    title: `Product ${params.productId}`,
  }
};

function page({params}:Props) {
  return (
    <div>
     Detail Page {params.productId}
    </div>
  )
}

export default page
