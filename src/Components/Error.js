import React, {useState} from 'react'
import Sidebar from './Utils/Sidebar'
import {data} from './Data'
import { useNavigate } from 'react-router'
import {Link} from 'react-router-dom'
import Contact from './Utils/Contact'
import Modal from './Utils/Modal'
import './css/Listing.css'



const Error = () => {
    const [query, setQuery] = useState ('')
    const [show, setShow] =useState(false)
    const [modal, setModal] =useState(true)
    const [style, setStyle] = useState ('hideSidebar')
    const navigate = useNavigate()
    const showForm =(e)=>{
        e.preventDefault();
       setShow(!show)
  
    }

    const closeForm =(e)=>{
        e.preventDefault();
       setShow(!show)
    } 
    const styleChange= (e)=>{
        setStyle ('showSidebar')
    }
    const handleLogout =(e)=>{
        e.preventDefault();
        navigate('/')

    } 
    
  return (
    <div className='listing'>
        <Sidebar/>
        <div className='listing-content'>
            <div className='list-header'>
            <div className='sidebar-button'>
                <button onClick ={styleChange}><i className='fa fa-bars'></i></button>
                <div className={style}>
                <button onClick={()=>setStyle('hideSidebar')}>x</button>
      <div className='profile'>
          
        <div className='profile-image'>
          <h1>C</h1>
        </div>
        <div className='profile-name'>
          <h2>Chinoyeh</h2>
        </div>
      </div>
      <ul className='Sidelinks'>
    
        <li>
        <Link to ='/listing' className='link'>
      
          <span><i className='fa fa-bullhorn'></i></span>
          <span className='list-link'>Listings</span>
          </Link>
        </li>
      
     
        <li>
          <Link to ='/*' className='link'>
          <span><i className='	fas fa-hourglass'></i></span>
          <span className='list-link'>Dashboard</span>
          </Link>
        </li>
        <li>
        <Link to ='/*' className='link'>  
        <span><i className='fa fa-laptop'></i></span>
          <span className='list-link'>Providers</span>
          </Link>
        </li>
        <li>
        <Link to ='/*' className='link'>
       
        <span><i className='	fas fa-user-friends'></i></span>
          <span className='list-link'>Users</span>
          </Link>
        </li>
        <li>
        <Link to ='/*' className='link'>
      
        <span><i className='	fa fa-credit-card'></i></span>
          <span className='list-link'>Billing</span>
          </Link>
        </li>
        <li>
        <Link to ='/*' className='link'>
        
        <span><i className='fa fa-gear'></i></span>
          <span className='list-link'>Settings</span>
          </Link>
        </li>
      </ul>
      <div className='Side-footer'>
        <h4>Upgrade to Pro</h4>
        <h5>Make the most out of Rabbu with Pro</h5>
        <button>Upgrade</button>
      </div>

      </div>
            </div>
            </div>
            <div>
                <div>
            <div className='search-bar'>
        <input placeholder='Search Listing' onChange={event => setQuery(event.target.value)}/>
        </div>
            </div>
    
        <div className='listing-nav'>
            <h1>Listings</h1>
        </div>
        
        {data.filter(datas=>{
            if (query ===''){
          
            return datas
          

        } else if (datas.lister.toLowerCase().includes(query.toLowerCase())){
            return datas
        }
        }).map ((datas)=>(
            <div className ='list-modal'key={datas.id}>
             <div className='list' >
                <div className='list-image'>
                    <img src={datas.image} alt ='Listing Image'/>
                 </div>   
                <div className='list-content'>
                <h2>{datas.lister}</h2>
                <h4>{datas.address}</h4>
                <div className='list-data'>
                    <h4 ><span><i className="fa fa-info-circle"></i></span><span><h5 style={{  color: 'rgb(181, 181, 181)'}}>Description</h5><h5>{datas.description}</h5></span></h4>
                    <h4 ><span><i className="fa fa-user"></i></span><span><h5 style={{  color: 'rgb(181, 181, 181)'}}>Name</h5><h5>{datas.contact}</h5></span></h4>
                     <h4 ><span><i className="fa fa-phone"></i></span><span><h5 style={{  color: 'rgb(181, 181, 181)'}}>Phone</h5><h5>{datas.phone}</h5></span></h4>
                    
                </div>
                 </div>   
                 
                </div>
                <button className='details' >View Details</button>
                <button  className = 'form' onClick ={showForm}>Contact Lister</button>
            </div>

        )) 
        }
            <Contact onClose={closeForm} show={show}/>
            <Modal modal ={modal} />
       
        <button className='logout' onClick ={handleLogout}> Logout</button>

        </div>
    
            </div>
       
        
      
        </div>
  )
}

export default Error


