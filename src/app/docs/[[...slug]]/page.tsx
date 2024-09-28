"use client";
import React from 'react';

// use spead opreator folder for catch all segments

function page({params}:{params:{slug:string[]}}) {
    if(params.slug?.length === 2){
        return <h1>Viewing docs for feature {params.slug[0]} concept of {params.slug[1]}</h1>
    }
    else if(params.slug?.length === 1 ){
        return <h1>Viewing docs of feature {params.slug[0]}</h1>
    }
    
  return <h1>Docs Page</h1>
  
  
}

export default page;
