import React from 'react'

function LoginForm() {
    return (
        <>
            <div className="my-3">
                <div className="">
                    <p>Email</p>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                </div>
                <div className="">
                    <p>Password</p>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingInput"
                            placeholder="********"
                        />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button className='btn btn-dark w-100' >Login</button>
            </div>
        </>
    )
}

export default LoginForm