import React from 'react';

const List = ({users, setUserSelected, deleteUser}) => {
    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <div className="list">
                {
                    users.map((user) =>(
                        <li key={user.email}>
                            <p>{user.first_name}, {user.last_name}</p>
                            <p>{user.email}</p>
                            <p>{user.birthday}</p>
                            <button onClick={() => setUserSelected(user)}>Editar</button>
                            <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                        </li>
                    ))
                }
            </div>
        </div>
    );
};

export default List;