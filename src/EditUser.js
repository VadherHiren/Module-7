import React from 'react';
import {useState} from "react";
import {useNavigate,useParams} from "react-router-dom"
import {useDispatch,} from 'react-redux';
import { EditUserData } from './UserReducer';


function EditUser() {

    const [name,setName] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {eid} = useParams();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(EditUserData({id:eid,name:name}))
        navigate('/')


    }
  return (
    <div>
       <center>
       <form onSubmit={handleSubmit}>
            Name: <input type='text'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            ></input>

            <input type='submit'></input>
        </form>
       </center>
      
    </div>
  )
}

export default EditUser
