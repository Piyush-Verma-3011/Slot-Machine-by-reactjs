import React from 'react'
import "./index.css"
import SlotM from './SlotMach'




const App = () => {
  return (
    <>
      <h1 className='heading_style'> 
      Welcome to<span style={{fontWeight:"bold"}}> Slot-Machine</span></h1>
    <div className='sloteMachine'>
    {/* for emoji window+; */}
    <SlotM x='😊' y='😊' z='😊'/>
    <SlotM x='😊' y='🤣' z='🤣'/>
    <SlotM x='❤️' y='😍' z='😊'/>
    </div>
   
    </>
  )
}

export default App