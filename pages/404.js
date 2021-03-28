import Link from 'next/link'
import React, {useState, useRef, useEffect} from 'react'

const Custom404 = () => {
  const [count, setCount] = useState(0)
  const title = useRef()

  useEffect(() => {
    console.log(title.current)
  }, [])
  return (
   <div>
     <h1 onClick={() => setCount(count+1)}>Page 404 {count}</h1>
     {
       <h1 ref={title} onClick={() =>title.current.classList.toggle('add') }>Titulo</h1>
     }
   </div>
  )
}

export default Custom404