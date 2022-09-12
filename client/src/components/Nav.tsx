import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Nav = () => {
  const { currentUser, setUser } = useContext(UserContext);
  return (
    <div className="nav">
      <Link to="/" className="navlink">Home</Link>
      <Link to="/users" className="navlink">Users</Link>
      <Link to="/categories" className="navlink">Categories</Link>
      {currentUser ? (
        <button onClick={() => setUser('')} className="navlink">Logout</button>
      ) : (
        <Link to="/login" className="navlink">Login</Link>
      )}
      
     
    </div>
  );
};
