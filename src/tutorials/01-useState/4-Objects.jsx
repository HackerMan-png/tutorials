import React, { useState } from 'react'
import { personData } from '../../data'

const Objects = () => {
  const [person, setPerson] = useState(personData)
  const [message, setMessage] = useState("")
  
  const changeMessage = (e) => {
    e.preventDefault();
    setPerson({...person, message: message})
    setMessage("")
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <form type="submit" onSubmit={
        (e) => changeMessage(e)
      }>


      <input type="text" placeholder="New Message Here" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit"
      className="btn">Change Message</button>
      </form>
    </>
  )
}

export default Objects
