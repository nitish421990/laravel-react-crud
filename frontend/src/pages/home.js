import http from "../http"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
export default function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get("/users").then(response => {
            setUsers(response.data);
        });
    }
  const  deleteUser = (id) => () => {
        http.delete("/users/"+id).then(response => {
            setUsers(users.filter(user => user.id !== id));
            fetchAllUsers();
        });
    }
  return (
  <div>Home Page
    <h2>Users List</h2>
    <table className="table">
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>  
                <td>Actionn</td>  
            </tr>
        </thead>
        <tbody>
            {users.map((user, index)=>(
                <tr key={user.id}>
                    <td>{++index}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="btn btn-info" to={({pathname: "/edit/"+user.id})}> Edit </Link>
                        <button type="button" className="btn btn-danger" onClick={deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
            ))} 
        </tbody>
    </table>
  </div>
)
}