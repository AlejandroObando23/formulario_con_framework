import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function TableUser() {
    const [users, setUsers] = useState([]);
    const getCustomers = async () => {
        try {
            const response = await fetch('/api/customers');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error al obtener clientes:', error);
        }
    }
    useEffect(() => {
        getCustomers();
    }, []);
    return (
        <>
            <div>
                <h1>Clientes</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>

                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>

                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <Link to="/" style={{ padding: '10px 15px', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                    Volver al Formulario
                </Link>
            </div>
        </>
    )
}
export default TableUser