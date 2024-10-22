import  UserService, { User  }from "./service/user-service";
import useUser from "./hooks/useUser";

const App = () => {
const {users,loading,error,setUsers,setError} = useUser()
  const handleDelete = (id: number) => {
    const oldUsers = [...users]
    
    // to risky approach
    setUsers(users.filter((user) => user.id !== id))
    UserService.deleteUser(id)
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
    UserService.create(user)
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
    UserService.updateUser(updatedUser).catch((e) => {
      setError(e.message);
      setUsers(oldUsers);
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
