import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";

export interface Users {
  id: string;
  name: string;
  role: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch(`http://localhost:5000/users`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };

    fetchUsers();
  }, []);
  return <div className="container">
    <Nav />
    {users?.map((user) => (
        <Link to={`/results/${user.name}`} key={user.id} className="userButton">{user.name}</Link>
    ))}
  </div>;
};

export default UsersPage;
