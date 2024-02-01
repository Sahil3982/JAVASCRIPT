import React from 'react'

const Linting = (props) => {
    function handlieclick(e){
        e.preventDefault()
        let dt="Sahil Patel";
        props.myclick(dt)
    }
  return (
    <button onClick={handlieclick}>Click</button>
  )
}

export default Linting