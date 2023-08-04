import React, { useEffect, useState } from 'react'

const useonline = () => {
const [isonline,setisonline]=useState(true);

  useEffect(()=>{
  window.addEventListener("online",()=>{
    setisonline(true)
  })
  window.addEventListener("offline",()=>{
    setisonline(false)
  })

  },[]) 
  return isonline
 
}

export default useonline
