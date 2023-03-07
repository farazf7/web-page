import React from 'react'
import './CreateNote.css'
import { useState } from 'react'

export default function CreateNote(props) {
    const [note, setnote] = useState({
        title:"",
        content:"",
    })
    const inputevent=(event)=>{
        

        const {name, value}=event.target;

        setnote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        })
    }
    const add=()=>{
        props.passnote(note);
        setnote({
            title:"",
            content:"",
        })
    }




    // =========================================
    // =========================================
  return (
    <div className='main-note'>
         <form action="">
            <input className='inp' type="text" placeholder='Title' 
            value={note.title} onChange={inputevent} name="title"/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Write Note...' 
            value={note.content} onChange={inputevent} name="content">

            </textarea>
            <button type="button" class="btn btn-success"
            onClick={add}>Add</button>
         </form>
    </div>
  )
}
