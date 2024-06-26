import './App.css';
import { useEffect } from 'react';
import { userData } from './UserReducer';
import {useDispatch} from 'react-redux';
import Home from './Home';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import AddUser from './AddUser';
import EditUser from './EditUser';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then((res)=>{return res.json();})
    .then((data)=>{
      dispatch(userData(data))
    })
  })

  return (
    <div className="App">
      <BrowserRouter>
      <Link to ="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<AddUser/>}></Route>
        <Route path="/edit/:eid" element={<EditUser/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
