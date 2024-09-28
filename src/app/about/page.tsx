
import type { Metadata } from "next";
import React from 'react'
export const metadata: Metadata = {
  title: "About Page",
};
function page() {
  return (
    <div>
      <h1>This is About Page</h1>
    </div>
  )
}
export default page;
