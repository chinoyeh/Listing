import React from 'react'
import './css/Login.css'


const Login = () => {
  
  return (

    <div className='login'>
        <form className='login-form'>
         <div className='input-container'>
         <i class="fa fa-user icon"></i>
        <input class="input-field" type="text" placeholder='Enter Username'/>
         </div>
         <div className='input-container'>
         <i class="fa fa-lock icon"></i>
            <input  class="input-field" type= 'password' placeholder='Enter Password'/>
         </div>
    
            <button>Login</button>
        </form>
 
   
        </div>
  )
}

export default Login