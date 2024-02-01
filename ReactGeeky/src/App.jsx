import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Linting from './Linting'
import UseEffect from './UseEffect'

function App() {
function getdata(data){
  
console.log(data);
}
  return (
    <>
      {/* <Linting myclick={getdata}/>       */}
      <UseEffect/>
    </>
  )
}

export default App
