import React from 'react'
import './css/Modal.css'
import { useNavigate } from 'react-router'


const Modal = (props) => {
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault ()
    
          navigate('/')
    
      }
    if (!props.modal){
        return null
      }
    
  return (
    <div className='modal'>
   <div className='modal-content'>
   <i className='fa fa-warning'></i>
        <h3>Error</h3>
        <button onClick={handleSubmit}> Back to Login</button>
   </div>

    </div>

  )
}

export default Modal