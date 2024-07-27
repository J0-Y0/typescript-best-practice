import { useEffect, useState } from "react";
import axios from "axios";
interface User{
  id:number,
  name: String,
  email:String
}
const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const[error,setError] = useState('')

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  },[]);
  return (
    <>
      {error && <p className="text-danger h5">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
