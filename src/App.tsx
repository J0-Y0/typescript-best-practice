import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
interface User{
  id:number,
  name: String,
  email:String
}
const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const[error,setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    
    return ()=>controller.abort()
  },[]);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
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
