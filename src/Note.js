import React from 'react'
import './Note.css'

export default function Note(props) {
const deletenote=()=>{
    props.delete(props.id)
}

  return (
    <div className='div'>
       <div className='note'>
          <h1>{props.title}</h1>
          <br/>
          <textarea className='textarea'>{props.content}</textarea>
          <button className='btn btn-danger btn1' onClick={deletenote}>Delete</button>
       </div>
    </div>
   
  )
}
