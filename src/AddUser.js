import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, } from 'react-redux';
import { addUserData } from './UserReducer';


function AddUser() {

  const [name, setName] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserData({ name: name }))
    navigate('/')


  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text"
                className="form-control"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                aria-describedby="emailHelp" placeholder="Enter name" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddUser
