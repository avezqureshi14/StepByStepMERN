import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div>
            <div className='container mt-5' >
            <form className='container mt-5' >
            <h1 className='mb-3' >Login</h1>
                    <div  className="form-outline mb-4">
                        <input type="email" id="form2Example1"  className="form-control" />
                        <label  className="form-label" for="form2Example1">Email address</label>
                    </div>

                    <div  className="form-outline mb-4">
                        <input type="password" id="form2Example2"  className="form-control" />
                        <label  className="form-label" for="form2Example2">Password</label>
                    </div>

                    <div  className="row mb-4">
                        <div  className="col d-flex justify-content-center">
                            
                        </div>

                        <div  className="col">
                        </div>
                    </div>

                    <button type="button"  className="btn btn-primary btn-block mb-4">Sign in</button>

                    <div  className="text-center">
                        <p>Not a member? <Link to='/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login