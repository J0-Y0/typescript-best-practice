import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
interface User {
  id: number;
  name: String;
  email: String;
}
const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false);
        setUsers(res.data);
      })
      .catch((err) => {

        if (err instanceof CanceledError) return;
        setError(err.message);
                // setLoading(false);

      })
      // .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);
  return (
    <>
      {loading&& <div className="spinner-border">
        </div>
      }
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
