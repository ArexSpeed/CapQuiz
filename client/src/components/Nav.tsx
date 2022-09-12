import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Nav = () => {
  const { currentUser, setUser } = useContext(UserContext);
  return (
    <div className="nav">
      <Link to="/" className="navlink">
        Home
      </Link>
      <Link to="/users" className="navlink">
        Users
      </Link>
      <Link to="/categories" className="navlink">
        Categories
      </Link>
      {currentUser ? (
        <>
          <Link to={`/results/${currentUser}`} className="navlink">
            My results
          </Link>
          <Link to="/quiz/add" className="navlink">
            Add quiz
          </Link>
          <button onClick={() => setUser("")} className="navlink">
            Logout
          </button>
        </>
      ) : (
        <Link to="/login" className="navlink">
          Login
        </Link>
      )}
    </div>
  );
};
