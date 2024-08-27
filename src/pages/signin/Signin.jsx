import React, { useState } from 'react'
import { email } from '../../assets/icons'
import { loginApi } from '../../api/auth/auth'
import { customToast, toastTypes } from '../../components/customToast/customToast'
import CustomSpinner from '../../components/customSpinner/CustomSpinner'

function Signin() {
    const initReqBody = {
        email : "",
        password:""
    }

    const [reqBody , setReqBody] = useState(initReqBody)
    const [loading, setLoading] = useState(false);

    const handelChange = (name, value) =>{
        setReqBody({...reqBody, [name] : value  })
    }

    const handekSubmit = () =>{
        for(const i in reqBody){
            if(reqBody[i] === ""){
                console.log(i, "missing...")
                return;
            }
        }
        setLoading(true)
        loginApi(reqBody).then((val)=>{
            console.log(val.data)
            customToast(toastTypes.success, "Login Successfully !")
            localStorage.setItem("auth-Token", val.data.token)
        }).catch(val=>{
            console.log(val)
        }).finally(()=>{
        setLoading(false)
        })
    }
    
  return (
     <>
   { loading ? <CustomSpinner/> : <div>
        <input type="text" onChange={(e)=>handelChange("email", e.target.value)}  />
        <input type="password" onChange={(e)=>handelChange("password", e.target.value)}  />
        <button onClick={handekSubmit}>Login</button>
    </div>}
    </>
  )
}

export default Signin