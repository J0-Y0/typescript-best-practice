import { useEffect, useState } from "react";
import axios from "axios";
interface User{
  id:number,
  name: String,
  email:String
}
const App = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  },[]);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user =><tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
};

export default App;
