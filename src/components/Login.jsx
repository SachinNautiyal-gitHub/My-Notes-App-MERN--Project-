import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [credential, setCredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });

    const data = await response.json();
    console.log(data);


    if (data.success) {
      localStorage.setItem('token', data.authToken);
      alert("logged in succesfully");
      navigate('/');
    }
    else {

      alert(" Invalid Credentials");
    }

  }

  const onchange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }


  return (
    <div className='login-pdiv'>

      <form className='auth-div m-5 p-5' onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' value={credential.email} onChange={onchange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-5 ">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={credential.password} onChange={onchange} name='password'/>
        </div>
        <p> doesn't have accout ?  || <Link to={'/signup'}>Sign </Link></p>
        <button type="submit" className="btn btn-primary" >Log In</button>
      </form>

    </div>
  )
}

export default Login
