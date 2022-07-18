import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data))
  },[])

  const getUsers = () =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data))
  }

  const deleteuser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
        .then(() => getUsers())
  }
  // console.log(userSelected)

  return (
    <div className="App">
      <Form getUsers={getUsers} userSelected={userSelected} setUserSelected={setUserSelected}/>
      <List users={users} setUserSelected={setUserSelected} deleteUser={deleteuser}/>
    </div>
  );
}

export default App;
