import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
 const [profileName, setProfileNmae] = useState('Chinoyeh')
  return (
    <div className='Sidebar'>
      <div className='profile'>
        <div className='profile-image'>
          <h1>R</h1>
        </div>
        <div className='profile-name'>
          <h2>{profileName}</h2>
        </div>
      </div>
      <ul className='Sidelinks'>
    
        <li>
        <Link to ='/listing' className='link'>
      
          <span><i className='fa fa-bullhorn'></i></span>
          <span>Listings</span>
          </Link>
        </li>
      
     
        <li>
          <Link to ='/*' className='link'>
          <span><i className='	fas fa-hourglass'></i></span>
          <span>Dashboard</span>
          </Link>
        </li>
        <li>
        <Link to ='/*' className='link'>  
        <span><i className='fa fa-laptop'></i></span>
          <span>Providers</span>
          </Link>
        </li>
        <li>
        <Link to ='/*' className='link'>
       
        <span><i className='	fas fa-user-friends'></i></span>
          <span>Users</span>
          </Link>
        </li>
        <li>
        <Link to ='/*' className='link'>
      
        <span><i className='	fa fa-credit-card'></i></span>
          <span>Billing</span>
          </Link>
        </li>
        <li>
        <Link to ='/*' className='link'>
        
        <span><i className='fa fa-gear'></i></span>
          <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className='Side-footer'>
        <h4>Upgrade to Pro</h4>
        <h5>Make the most out of Rabbu with Pro</h5>
        <button>Upgrade</button>
      </div>

      </div>
  )
}

export default Sidebar