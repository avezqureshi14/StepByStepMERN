import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    const[user,setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
    })
    let name,value
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }
    const PostData = async (e) => {
        e.preventDefault();

        const{name,email,phone,work,password,cpassword} = user;
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword

            })
        })

        const data = res.json();
        if (data.status === 422 || !data ) {
            window.alert("Invalid Regsitration ");
            console.log("Invalid Regsitration ");
            console.log(data)
        }
        else{
            window.alert("Regsitration Successfull ");
            console.log("Regsitration Successfull");
            console.log(data)
        }
    }
  return (
    <div>
            <div className='container mt-5' >
            <form method='POST' className='container mt-5' autoComplete='off' autofill='off' >
            <h1 className='mb-3'  >Register</h1>
                    <div  className="form-outline mb-4">
                        <input type="text" name="name" value={user.name} onChange={handleInputs} id="form2Example1"  className="form-control" />
                        <label  className="form-label" for="form2Example1">Name</label>
                    </div>

                    <div  className="form-outline mb-4">
                        <input type="email" name="email" value={user.email} onChange={handleInputs} id="form2Example1"  className="form-control" />
                        <label  className="form-label" for="form2Example1">Email address</label>
                    </div>

                    <div  className="form-outline mb-4">
                        <input type="number" name="phone" value={user.phone} onChange={handleInputs} id="form2Example2"  className="form-control" />
                        <label  className="form-label" for="form2Example2">Phone</label>
                    </div>

                    <div  className="form-outline mb-4">
                        <input type="text" name="work" value={user.work} onChange={handleInputs} id="form2Example2"  className="form-control" />
                        <label  className="form-label" for="form2Example2">Work</label>
                    </div>

                    <div  className="form-outline mb-4">
                        <input type="password" name="password" value={user.password} onChange={handleInputs} id="form2Example2"  className="form-control" />
                        <label  className="form-label" for="form2Example2">Password</label>
                    </div>

                    <div  className="form-outline mb-4">
                        <input type="password" name="cpassword" value={user.cpassword} onChange={handleInputs} id="form2Example2"  className="form-control" />
                        <label  className="form-label" for="form2Example2">Confirm Password</label>
                    </div>

                    <div  className="row mb-4">
                        <div  className="col d-flex justify-content-center">
                            
                        </div>

                        <div  className="col">
                        </div>
                    </div>

                    <button type="button"  className="btn btn-primary btn-block mb-4" onClick={PostData} >Register</button>

                    <div  className="text-center">
                        <p>Already a member? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Register