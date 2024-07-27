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

  const handleDelete = (id: number) => {
    const oldUsers = [...users]
    
    // to risky apprach
    setUsers(users.filter((user) => user.id !== id))
    axios
      .delete("https://jsonplaceholder.typicode.com/xusers/" + id)
      .catch((e) => {
        setError(e.message)
        setUsers(oldUsers)
      });
    
  };
  return (
    <>
      {loading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
