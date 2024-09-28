
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog"
 
};

function page() {
  return (
    <div>
      <h1>My Blog</h1>
    </div>
  )
}

export default page
