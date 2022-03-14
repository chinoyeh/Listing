import React , {useState}from 'react'
import { useAuth } from './context/Context'

import './css/Login.css'


const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [modal, setModal] =useState(false)
  const {handleLogin} =useAuth()

async function handleSubmit (e){
  e.preventDefault()
  try {
    setModal(false)
    await handleLogin(user, password)

  } catch {
   setModal(modal)
   
  }
 
}

  return (

    <div className='login'>
        <form className='login-form' onSubmit ={handleSubmit}>
         <div className='input-container'>
         <i className="fa fa-user icon"></i>
        <input className="input-field" type="text" placeholder='Enter Username' value ={user} onChange={(e)=>{setUser(e.target.value)}}/>
         </div>
         <div className='input-container'>
         <i className="fa fa-lock icon"></i>
            <input  className="input-field" type= 'password' placeholder='Enter Password'value ={password} onChange={(e)=>{setPassword(e.target.value)}}/>
         </div>
    
            <button type='submit'>Login</button>
        </form>
       
   
        </div>
  )
}

export default Login