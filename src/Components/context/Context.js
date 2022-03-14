import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router'

const Context = React.createContext()


export function useAuth(){
    return useContext(Context)
}

export function AuthProvider ({children}){
 
    const [modal, setModal] =useState(false)
    const navigate = useNavigate()
     

 

        function handleLogin(user,password){
  
        if (user==='user' && password=== 'password'){
          navigate('/Listing')
          setModal (modal)
                   
    
        } else{
          navigate('/Error')
        
        
         
        }
      }
      const value ={
          handleLogin
      }
      return (
        <Context.Provider value={value}>
            {!modal && children}
        </Context.Provider>
      )

}
    