import React, {useState} from 'react'


// Components MUST START WITH CAPITAL
const Basics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if(text === "random title"){
      setText("hello world")
    } else {
      setText("random title")
    }
  }

  return <>
    <h2>{text}</h2>
    <button className="btn" onClick={handleClick}>Change Title</button>
  </>;
};

export default Basics;