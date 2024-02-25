

import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { useNavigate, useParams } from 'react-router-dom';


const EditNote = () => {
 
  const {updateNote, note, setNote} = useContext(AppContext);
  const navigate = useNavigate();

  const noteid = useParams();
  

  
  const handleOnClick = async() =>{
     await updateNote(note.title, note.description, note.tag, noteid.id);
    navigate('/home');
  }

  const onchange =(e) =>{
    setNote({...note, [e.target.name]: e.target.value})
 }


  return (
    <div className='container mt-5'>
    <>
    <div className="mb-3 w-75">
<label htmlFor="exampleFormControlInput1" className="form-label"></label>
<input type="email" className="form-control" id="title" name='title' onChange={onchange} placeholder='title'/>
</div>
<div className="mb-3 w-75">
<label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
<textarea className="form-control" id="description" name='description'   placeholder='description' onChange={onchange}  rows="8"></textarea>
</div>
<div className="mb-3 w-75">
<label htmlFor="exampleFormControlInput1" className="form-label"></label>
<input type="email" className="form-control" id="tag" name='tag' onChange={onchange}   placeholder='tag' />
</div> 
    </>

    <button type="button" className="btn btn-success m-3" onClick={handleOnClick}>Update Note</button>

 </div>
  )
}

export default EditNote
