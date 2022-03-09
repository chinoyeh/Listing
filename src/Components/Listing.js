import React from 'react'
import Sidebar from './Utils/Sidebar'
import {data} from './Data'
import './Listing.css'

const Listing = () => {
  return (
    <div className='listing'>
        <Sidebar/>
        <div className='listing-content'>
        <div className='search-bar'>
        <input />
        </div>
        <div className='listing-nav'>
            <h1>Listings</h1>
        </div>
        {data.map((datas)=>{
            const {id, image, address, name, description, contact,phone}=datas
            return<div className='list' key={id}>
                <div className='list-image'>
                    <img src={image} alt ='Listing Image'/>
                 </div>   
                <div className='list-content'>
                <h2>{name}</h2>
                <h4>{address}</h4>
                <div className='list-data'>
                    <h4 ><span><i class="fa fa-info-circle"></i></span><span><h5 style={{  color: 'rgb(181, 181, 181)'}}>Description</h5><h5>{description}</h5></span></h4>
                    <h4 ><span><i class="fa fa-user"></i></span><span><h5 style={{  color: 'rgb(181, 181, 181)'}}>Name</h5><h5>{contact}</h5></span></h4>
                     <h4 ><span><i class="fa fa-phone"></i></span><span><h5 style={{  color: 'rgb(181, 181, 181)'}}>Phone</h5><h5>{phone}</h5></span></h4>
                    
                </div>
                 </div>   
                 
                </div>
          

        })}
        </div>
  
        </div>
  )
}

export default Listing


