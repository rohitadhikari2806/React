// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CondRendering from './components/CondRendering'
// import PropEx1 from './components/PropEx1'
// import PropEx2 from './components/PropEx2'
// import UseStateEx1 from './components/UseStateEx1'

function App() {
 

  return (
    <>
      {/* <PropEx1 name="Tom" country="India"/>
      <PropEx2 name="Jerry" age="23"/>
      <UseStateEx1/>
       */}
       <CondRendering isLogged={true}/>
    </>
  )
}

export default App
