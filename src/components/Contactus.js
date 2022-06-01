import { useForm } from 'react-hook-form'
import React, { useState } from 'react';

function Contactus() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    let [usersList, setUsersList] = useState([])
    const onFormSubmit = (userObj) => {
        setUsersList([...usersList, userObj])
    }
    return (
        <div>
            <p className='display-3 text-center text-info'>contact form</p>
            <form className="mx-auto w-50" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" {...register("username", { required: true, minLength: 4 })} />
                    {errors.username?.type === 'required' && <p className='text-danger'>*username is required</p>}
                    {errors.username?.type === 'minLength' && <p className='text-danger'>*mininum lentgh should be 4</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email"  {...register("email", { required: true })} />
                    {errors.email?.type === 'required' && <p className='text-danger'>*email is required</p>}
                </div>
                {/* <div className="mb-3">
                    <label>Select Skills</label>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="js"  {...register("skills")} />
                        <label htmlFor="js" className='form-check-label'>Javascript</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="react"  {...register("skills")} />
                        <label htmlFor="react" className='form-check-label'>React</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="angular"  {...register("skills", { required: true })} />
                        <label htmlFor="angular" className='form-check-label'>Angular</label>
                    </div>
                    {errors.skills?.type === 'required' && <p className='text-danger'>*skills is required</p>}
                </div>
    */}
                <div className="mb-3">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" className="form-control" id="dob"  {...register("dob", { required: true })} />
                    {errors.dob?.type === 'required' && <p className='text-danger'>*date of birth is required</p>}
                </div>
                {/*
                <div className="mb-3">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea type="text" className="form-control" id="feedback"  {...register("feedback", { required: true })}></textarea>
                    {errors.feedback?.type === 'required' && <p className='text-danger'>*feedback is required</p>}
                </div>
            */}
                <button type="submit" className="btn btn-success d-block mx-auto">Send</button>
            </form >
            <p className='display-3 text-center text-info'>list of users</p>
            <div className='container'>
                {usersList.length == 0 && <h1 className='text-warning text-center'>list is empty</h1>}
                {usersList.length != 0 &&
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>username</th>
                                <th>email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersList.map((userObj, index) => <tr key={index}>
                                    <td>{userObj.username}</td>
                                    <td>{userObj.email}</td>
                                    <td>{userObj.dob}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div >
    );
}

export default Contactus;