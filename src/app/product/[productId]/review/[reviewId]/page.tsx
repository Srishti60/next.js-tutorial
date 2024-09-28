import React from 'react'
import {notFound} from 'next/navigation';

function page({params}:{params:{productId:string,reviewId:string}}) {
  if(parseInt(params.reviewId)>1000){
    notFound();
  }
  return (
    <div>
      <h1>Review  {params.reviewId} for Products {params.productId} </h1>
    </div>
  )
}

export default page
