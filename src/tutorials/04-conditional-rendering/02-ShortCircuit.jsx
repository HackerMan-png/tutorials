import React, { useState } from 'react'


const ShortCircuit = () => {
  const [text, setText] = useState("Ping")
  const [isError, setIsError] = useState(false)

  const firstValue = text || 'Pong';
  const secondValue = text && "Pong"

  return (
    <div className="container">
      {/* <h1>{firstValue}</h1>
      <h1>{secondValue}</h1> */}

      <h1>{ text || "no username"}</h1>
      <button className="btn" onClick={ () => {
        // if(isError === true) {
        //   setIsError(false)
        // }else{
        //   setIsError(true)
        // }

        // isError ? setIsError(false) : setIsError(true)

        setIsError(!isError)
      }}>Toggle Error</button>
      {/* {isError ? (
        <h1>There was an error.</h1>
      ): (
        <h1>There is no error.</h1>
      )} */}
      {isError && <h1>SC error</h1>}
    </div>
  )
}

export default ShortCircuit
