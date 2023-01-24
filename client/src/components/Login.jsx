import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) =>{
        e.preventDefault();
        const res = await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password 
            })

        })
        const data = res.json();
        if (data.status === 400 || !data) {
            window.alert("Invlaid Credentials");
            console.log(data);
        }
        else{
            window.alert("Login Successfull")
            console.log(data);
        }
    }
    return (
        <div>
            <div className='container mt-5' >
            <form method='POST' className='container mt-5' >
            <h1 className='mb-3' >Login</h1>
                    <div  className="form-outline mb-4">
                        <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} id="form2Example1"  className="form-control" />
                        <label  className="form-label" for="form2Example1">Email address</label>
                    </div>

                    <div  className="form-outline mb-4">
                        <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} id="form2Example2"  className="form-control" />
                        <label  className="form-label" for="form2Example2">Password</label>
                    </div>

                    <div  className="row mb-4">
                        <div  className="col d-flex justify-content-center">
                            
                        </div>

                        <div  className="col">
                        </div>
                    </div>

                    <button type="button" onClick={loginUser}  className="btn btn-primary btn-block mb-4">Sign in</button>

                    <div  className="text-center">
                        <p>Not a member? <Link to='/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login