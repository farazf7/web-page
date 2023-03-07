import Header from './Header';
import './App.css';
import Footer from './Footer'
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';

function App() {
  const [additem, setadditem]= useState([]);

  const addnote=(note)=>{
    setadditem((prevData)=>{
      return [...prevData, note]
    })
  }
  const onDelete=(id)=>{
    setadditem((olddata)=>
      olddata.filter((currdata, index)=>{
        return index !== id;
      })
    )
  }
  return (
    <div className="App">
      <Header/>
      {/* <Footer/> */}

      <div className='main1-div'>
        <div className='first'>
        <h2>NOTES HERE</h2>
        {/* <Note/> */}
        {additem.map((value, index)=>{
          return <Note key={index}
          id={index} title={value.title} content={value.content}
          delete={onDelete}/>
        })}
        </div>
       

        <div className='sec'>
         
        <CreateNote passnote={addnote}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;  
