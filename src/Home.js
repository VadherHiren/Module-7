import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { deleteUserData } from './UserReducer';
import { useDispatch } from 'react-redux';
function Home() {

  const [users] = useSelector(state => state.users);
  console.log(users)

  const dispatch = useDispatch();

  const handleDelete = (id123) => {
    dispatch(deleteUserData({ id: id123 }))
  }
  return (
    <div>
      <div>
        <button type="button" class="btn btn-info">
          <Link to='/add'>Add User</Link>
        </button>

      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button className='btn btn-primary'>View</button>
                <button className='btn btn-outline-secondary'><Link to={`/edit/${user.id}`}>Edit</Link></button>
                <button onClick={() => { handleDelete(user.id) }} className='btn btn-outline-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
