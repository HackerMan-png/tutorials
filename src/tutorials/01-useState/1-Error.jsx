import React from 'react'

let title = "random title"

const Error = () => {
  const handleClick = () =>{
    title = "Hello World"
    console.log(title);
  }
  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </>
  )
}

export default Error
