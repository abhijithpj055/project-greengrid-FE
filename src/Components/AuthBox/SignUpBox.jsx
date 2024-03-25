import React from 'react'
import './LoginBox.css'
import CustomInput from '../Common/CustomInput/CustomInput'

function SignUpBox({setBoxType}) {
  return (
   <><div className='d-flex flex-column'>
     <div className='mt-4'>
              <CustomInput label={'Name'} value={null}/>
     </div>
     <div className='mt-4'>
              <CustomInput label={'Email'} value={null}/>
     </div>
     <div className='mt-4'>
              <CustomInput label={'Mobile Number'} value={null}/>
     </div>
     <div className='mt-4'>
              <CustomInput label={'Password'} value={null}/>
     </div>
     <div className='mt-4'>
              <CustomInput label={'Confirm Password'} value={null}/>
     </div>

     <button className='common-button mt-4 align-self-center'>Sign up</button>

     <p className='already-account mt-4'>already have an account<i onClick={()=>setBoxType('login')}> Login here</i></p>


     </div></>
  )
}

export default SignUpBox