import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./service/api-client";
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
    apiClient
      .get("", {
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
    apiClient
      .delete(""+ id)
      .catch((e) => {
        setError(e.message)
        setUsers(oldUsers)
      });
    
  };
  const addUser = () => {
    const user = {
      name: "yosef",
      id: 0,
      email: "yo@yo.com"
    };

    // to risky apprach
    setUsers([user, ...users]);
    apiClient
      .post("", user)
      .then(({ data: newUser }) => setUsers([newUser, ...users]))
      .catch((e) => {
        setError(e.message);
        // setUsers(oldUsers);
      });
  };
  const updateUser = (user: User) => {
    const oldUsers = [...users]
    const updatedUser = { ...user, name: user.name + "=jo" }
    setUsers(users.map(u => u.id === user.id ? updatedUser : u))
    apiClient
      .put("" + user.id, updateUser)
      .catch((e) => {
        setError(e.message);
        setUsers(oldUsers)
      });
    
  }
  return (
    <>
      {loading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary" onClick={addUser}>
        add user
      </button>
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
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => updateUser(user)}
                >
                  update
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
