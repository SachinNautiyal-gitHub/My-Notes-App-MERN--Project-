

import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { useNavigate } from 'react-router-dom';

const AddNote = () => {

  const {addNote , note , setNote} = useContext(AppContext);
  const navigate = useNavigate();

  const handleOnClick = () =>{
     addNote(note.title, note.description, note.tag);
     navigate('/');
  }

  const onchange =(e) =>{
     setNote({...note, [e.target.name]: e.target.value})
  }

 
  return (
    <div className='container mt-5'>
      
  <div className="mb-3 w-75">
  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name='title' onChange={onchange}  placeholder="Title"/>
</div>
<div className="mb-3 w-75">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">description</label>
  <input type="text" className="form-control flex-wrap" id="description" name='description'  onChange={onchange} placeholder="Title"/>
</div>
<div className="mb-3 w-75">
  <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
  <input type="text" className="form-control" id="tag" name='tag' onChange={onchange} placeholder="Tag"/>
</div> 
       

       <button type="button" className="btn btn-success m-3" onClick={handleOnClick}>Add Note</button>

    </div>
  )
}

export default AddNote
