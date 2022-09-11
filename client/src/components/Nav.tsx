import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Nav = () => {
  const { currentUser, setUser } = useContext(UserContext);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/categories">Categories</Link>
      {currentUser ? (
        <button onClick={() => setUser('')}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      
     
    </div>
  );
};
