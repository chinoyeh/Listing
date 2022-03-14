import React, {useState} from 'react'
import './css/Contact.css'
import { useNavigate } from 'react-router'

const Modal = (props) => {
  const [user, setUser] = useState ('')
  const [email, setEmail] = useState ('')
  const [message, setMessage] = useState ('')
  if (!props.show){
    return null
  }

  return (
    <div className='contact' >
    <form className='contact-form'>
     
       <h3>Name</h3>
      <input type= 'text' name ='name' value={user} onChange={(e)=>{setUser(e.target.value)}}/>
  
     
      <h3>Email</h3>
      <input type= 'email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        
      <h3>Message</h3>
  
      <textarea name='message' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
   
      <button onClose={props.onClose}>Send</button>
 
 
 
</form>
</div>
  )
}

export default Modal