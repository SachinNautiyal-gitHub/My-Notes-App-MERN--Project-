

import React, {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [credential , setCredential] = useState({name:"" , email : "" , password : " "});
  const navigate = useNavigate();

 const handleOnSubmit = async (e) =>{
    
  e.preventDefault();
  const response = await fetch("https://notes-app-backend-five.vercel.app/api/auth/createuser", {
     method : "POST",
     headers : {
       'Content-Type' : 'application/json'
     },
     body : JSON.stringify({name :credential.name,  email : credential.email , password : credential.password})
  });

  const data = await response.json();
  console.log(data);
   

  if(data.success){
    localStorage.setItem('token', data.authToken);
    alert("Sign-Up in succesfully");
    navigate('/');
  }
  else{
      alert(" Invalid Credentials");
  }
     
 }

const onchange = (e) =>{  
  setCredential({...credential ,[e.target.name] : e.target.value })
}




  return (
    <div className='login-pdiv'>
    
    <form className='auth-div m-5 p-5' onSubmit={handleOnSubmit} >
    <div className="mb-3">
 <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Name</label>
 <input type="text" className="form-control" id="name"  name='name' value={credential.name} aria-describedby="emailHelp" onChange={onchange} />
 </div>

   <div className="mb-3">
 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
 <input type="email" className="form-control" id="email" name='email' value={credential.email} aria-describedby="emailHelp" onChange={onchange}/>
 </div>
 <div className="mb-5 ">
 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
 <input type="password" className="form-control" id="password" name='password' value={credential.pasword} onChange={onchange}/>
</div>
<p>arleady have accout ?  | <Link to={'/login'}>Log In</Link></p>
<button type="submit" className="btn btn-primary">Sign Up</button>
</form>
 </div>
 
  )
}

export default SignUp
