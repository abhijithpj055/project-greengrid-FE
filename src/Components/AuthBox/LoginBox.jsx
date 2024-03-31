import React, { useState } from 'react'
import './LoginBox.css'
import CustomInput from '../Common/CustomInput/CustomInput'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { errorToast, successToast } from '../../Plugins/Toast/Toast'
import { setUserData } from '../../Redux/UserSlice'
import { useDispatch } from 'react-redux'
import { showorhideLoader } from '../../Redux/GeneralSlice'

function LoginBox({setBoxType}) {
  const [loginData,setLoginData]=useState({})
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogin=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

   const doLogin=()=>{
    dispatch(showorhideLoader(true))
     axios({
      method:'POST',
      url:process.env.REACT_APP_BASE_URL+'/auth/dologin',
      data:loginData
    }).then((res)=>{

      localStorage.setItem('token',res.data.token)
      localStorage.setItem('user',JSON.stringify(res.data.user))
      dispatch(setUserData(res.data.user))
       navigate('/home')
       dispatch(showorhideLoader(false))
       successToast(res.message)

    })
     .catch((err)=>{
      dispatch(showorhideLoader(false))
       errorToast(err?.response?.data.message || 'something went to wrong')

    })

 }

  

  return (
   <> <div className='d-flex flex-column'>
           <div className='mt4'>
              <CustomInput label={'Email'} value={loginData.email} name={'email'} onchange={handleLogin}/>
            </div>
            <div className='mt-4'>
              <CustomInput label={'password'} value={loginData.password} name={'password'} onchange={handleLogin}/>
           </div>
    
           <button className='common-button mt-4 align-self-center' onClick={doLogin}>Login</button>

           <p className='already-account mt-4'>Dont have an account<i onClick={()=>setBoxType('signup')}> sign up here</i></p>

       </div></>
        
 )
}

export default LoginBox