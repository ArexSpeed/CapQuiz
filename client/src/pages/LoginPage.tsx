import { useRef, FormEvent, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const formRef = useRef(null!);
  let navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    const payload = {
      name: form.get("name"),
    };

    await fetch(`http://localhost:5000/users/login/${payload.name}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUser(data.name))
      .then(() => navigate("/"));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="enter a name" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
