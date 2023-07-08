

import React from 'react'

const AddNote = () => {

 
  return (
    <div className='container mt-5'>
      
  <div className="mb-3 w-75">
  <label for="exampleFormControlInput1" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name='title'  placeholder="Title"/>
</div>
<div className="mb-3 w-75">
  <label for="exampleFormControlTextarea1" className="form-label">description</label>
  <input type="text" className="form-control flex-wrap" id="description"  onChange={onchange} placeholder="Title"/>
</div>
<div className="mb-3 w-75">
  <label for="exampleFormControlInput1" className="form-label">Tag</label>
  <input type="text" className="form-control" id="tag" name='tag'  placeholder="Tag"/>
</div> 
       

       <button type="button" className="btn btn-success m-3"  >Add Note</button>

    </div>
  )
}

export default AddNote
