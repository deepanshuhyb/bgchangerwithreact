import { useState } from 'react'

function App() {
  const [color, setcolor] = useState('olive')




  return (
    <>
    <div className='w-full h-screen'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3'>
          <button onClick={()=>{setcolor('red')}} style={{backgroundColor: color}}>red</button>
          <button onClick={()=>{setcolor('green')}} style={{backgroundColor: 'green'}}>green</button>
          <button onClick={()=>{setcolor('yellow')}} style={{backgroundColor: 'yellow'}}>yellow</button>
          <button onClick={()=>{setcolor('purple')}} style={{backgroundColor: 'purple'}}>purple</button>
          <button onClick={()=>{setcolor('black')}} className='text-white' style={{backgroundColor: 'black'}}>black</button>
          <button onClick={()=>{setcolor('white')}} style={{backgroundColor: 'white'}}>white</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
