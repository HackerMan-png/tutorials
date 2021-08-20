import React, { useState } from 'react'

const Counter = () => {
  const [value, setValue] = useState(0)
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1
      })
    }, 1000)
  }

  return (
    <>
    <section className="item cool">
      <h3>Counter: {value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
      <button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
      <button className="btn" onClick={() => setValue(0)}>Reset</button>
    </section>
      <section className="item cool">
      <h3>More Complex Counter: {value}</h3>
      <button className="btn" onClick={() => complexIncrease()}>Increase after 1 second</button>
      </section>
    </>

  )
}

export default Counter
