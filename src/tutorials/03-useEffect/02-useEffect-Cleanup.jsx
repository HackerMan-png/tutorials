import React, { useState, useEffect } from 'react'

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth)
  
  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log("UE happened");
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
      console.log("Cleanup happened");
    }
  }, [])

  console.log("Render happened");
  return (
    <>
      <h1>Window Size: {size} px</h1>
    </>
  )
}

export default CleanUp
