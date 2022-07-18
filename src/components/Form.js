import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = ({getUsers, userSelected, setUserSelected}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")

    const reset = () =>{
        setFirstName("")
        setLastName("")
        setBirthday("")
        setEmail("")
        setPassword("")
        setUserSelected(null)
    }

    useEffect(() =>{
        if(userSelected){
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setBirthday(userSelected.birthday)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
        }
    },[userSelected])

    const submit = e =>{
        e.preventDefault()
        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday
        } 
        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers()
                    reset()
                })
        } else{
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => {
                getUsers()
                reset()
        })
        }
        
    }

    return (
        <form onSubmit={submit}>
            <h2>Ingresa aqui un nuevo usuario</h2>
            <div>
                <label htmlFor="firstName">Nombre: </label>
                <input 
                    placeholder='ingresar nombre/s'
                    type="text" 
                    id='firstName'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
            </div>
            
            <div>
                <label htmlFor="lastName">Apellido: </label>
                <input
                    placeholder='ingresar apellido/s'
                    type="text" 
                    id='lastName'
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input 
                    type="text" 
                    placeholder='ingremar correo electrónico'
                    id='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    placeholder='ingresar contraseña'
                    id='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            
            <div>
                <label htmlFor="birthday">Fecha de nacimiento: </label>
                <input 
                    type="date" 
                    id='birthday'
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                />
            </div>
            
            <button>Enviar</button>
            {
                userSelected !== null ? <button onClick={() => reset()}>Cancelarrrrrrrrrrr</button> : ""
            }
        </form>
    );
};

export default Form;