

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();

  if (!localStorage.getItem('token')) {
    navigate('/login');
  }
  else return (
    <>
      <Link to={'/addnote'}> <button type="button" className="btn btn-info m-5">Add Note</button></Link>
      <div className="usernotes">
        <div className="m-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem tempora aspernatur, inventore magnam provident possimus cum natus aliquid, recusandae soluta eum ut labore delectus velit beatae fugiat explicabo deserunt in magni.
          </p>

          <div className="buttons-container">

            <Link to={'/editnote'}> <button type="button" className="btn btn-success m-2">Update Note</button></Link>
            <Link><button type="button" className="btn btn-danger m-2">Delete note</button></Link>
          </div>
        </div>
      </div>



    </>
  )
}

export default Home
