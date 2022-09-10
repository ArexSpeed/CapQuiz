import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  return <div>
    {users?.map((user) => (
      <div key={user.id}>
        <Link to={`/results/${user.name}`}>{user.name}</Link>
      </div>
    ))}
  </div>;
};

export default UsersPage;
