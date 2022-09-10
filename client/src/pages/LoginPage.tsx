import { useState, useEffect, useRef, FormEvent } from "react";
import { Navigate } from "react-router";

const LoginPage = () => {
  const formRef = useRef(null!);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    const payload = {
      name: form.get("name"),
    };

    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //console.log({ response });
    if (response.ok) {
      <Navigate to="/" />
    }
  }

  return <div>
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="enter a name" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>;
};

export default LoginPage;
