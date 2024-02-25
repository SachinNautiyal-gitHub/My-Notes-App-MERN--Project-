

import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context'


const Home = () => {

  const { deleteNote, notesArray } = useContext(AppContext);

  const navigate = useNavigate();


  const handleClick = (id) =>{
     const noteid = id;
     navigate(`/editnote/${noteid}`);
  }

  if (!localStorage.getItem('token')) {
    navigate('/login');
  }
  else return (
    <>
      <Link to={'/addnote'}> <button type="button" className="btn btn-info m-5">Add Note</button></Link>
      <div className="usernotes">{
        notesArray && notesArray.map((note)=>(
          <div className="m-4" key={note._id}>
            <h1>{note.title}</h1>
          <p>{note.description}</p>
           

          <div className="buttons-container">

             <button type="button" className="btn btn-success m-2" onClick={() => { handleClick(note._id) }}  >Update Note</button>
            <button type="button" className="btn btn-danger m-2" onClick={() => {deleteNote(note._id) }} >Delete note</button>
          </div>
        </div>
        ))
       
      }
      </div>



    </>
  )
}

export default Home
