import React from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../images/logo2.png';
import {Link, useHistory} from 'react-router-dom';
import './Login.css'
import { useAuth } from './useAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import JwtDecode from 'jwt-decode';


const SignIn = () => {
   const auth = useAuth()
   const user = auth.user
   const history = useHistory()

   const [signInResult, setSignInResult] = useState()
   const { register, handleSubmit, errors } = useForm();   
   const onSubmit = data => { 
      fetch('https://red-onion-backend-server.herokuapp.com/user-signIn', {
         method:'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({signIn:data})
      })
      .then(res => res.json())
      .then(result => {
         console.log(result)
         setSignInResult(result)
         setIsSuccess(true)
         result.token && localStorage.setItem('auth-token', result.token)
         const decoded = result.token && JwtDecode(result.token)
         result.token && auth.setUser(decoded)
         result.success && history.push('/')
      })      
   }

   const [isSuccess, setIsSuccess] = useState(false)
   if (isSuccess) {
      setTimeout(()=> setIsSuccess(false), 4000)
   }
   
   useEffect(() => {
      if (user) {
         fetch('https://red-onion-backend-server.herokuapp.com/signup-with-google', {
            method:'POST',
            headers:{
               'Content-type':'application/json'
            },
            body:JSON.stringify({user})
         })
         .then(res => res.json())
         .then(result => {
            console.log(result)
         })
      }
   }, [user])
   

   return (
      <div className="sign-up">
         <div className="container">
               <div className="logo2 text-center">
                  <Link to="/">
                        <img src={Logo} alt=""/>
                  </Link>
               </div>
               <form onSubmit={handleSubmit(onSubmit)} className="py-5">

                  <div className="form-group">
                     <input name="email" type="email" className="form-control" ref={register({ required: true })} placeholder="Password" />
                     {errors.email && <span className="error">Email is required</span>}
                  </div>
                  <div className="form-group">
                     <input name="password" type="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                     {errors.password && <span className="error">Password is required</span>}
                  </div>
                  
                  <div className="form-group">
                     <button className="btn btn-danger btn-block" type="submit">Sign In</button>
                     {isSuccess &&
                        <p className="ml-3 success-mgs text-success"> {signInResult.error ? signInResult.error : signInResult.success && signInResult.success} </p>
                        
                     }
                  </div>
                  <div className="option text-center">
                     <Link to='/signup'><label>Create a new Account</label></Link>
                  </div>
               </form>
               <div className="text-center">
                  <button onClick={() => {auth.signInWithGmail()}}>Google</button>
               </div>
         </div>
      </div>
   );
};

export default SignIn;