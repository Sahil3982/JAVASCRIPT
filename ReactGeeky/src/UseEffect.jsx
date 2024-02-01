import React, { useState } from 'react'

const UseEffect = () => {
let [count,setCount]= useState(0);
let [rand,setRand]=useState(0);
function randomfun(){
    rand = setRand(Math.round(Math.random()*1000))
}
function counter(){
setCount(count+1);
}

  return (
    <>
    <h1>Counter {count}</h1>
    <button onClick={counter}>Click</button><hr/>
    <h1>Number {rand}</h1>
    <button onClick={randomfun}>Click</button>
    </>
  )
}

export default UseEffect