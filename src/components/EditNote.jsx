

import React from 'react'


const EditNote = () => {
 

  return (
    <div className='container mt-5'>
    <>
    <div className="mb-3 w-75">
<label for="exampleFormControlInput1" className="form-label"></label>
<input type="email" className="form-control" id="title" name='title'  placeholder="Title"/>
</div>
<div className="mb-3 w-75">
<label for="exampleFormControlTextarea1" className="form-label"></label>
<textarea className="form-control" id="description" name='description'   placeholder='description' rows="8"></textarea>
</div>
<div className="mb-3 w-75">
<label for="exampleFormControlInput1" className="form-label"></label>
<input type="email" className="form-control" id="tag" name='tag'   placeholder="Tag"/>
</div> 
    </>

    <button type="button" className="btn btn-success m-3" >Update Note</button>

 </div>
  )
}

export default EditNote
