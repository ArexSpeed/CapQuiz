import { useRef, useState, FormEvent } from "react";
import { Link } from "react-router-dom";

const AddCategoryPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null!);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    const payload = {
      name: form.get("name"),
    };

    const response = await fetch("http://localhost:5000/categories", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //console.log({ response });
    if (response.ok) {
      setSubmitted(true);
    }
  }

  return !submitted ? (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="enter a name" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  ) : (
    <div>
      You add new Category!
      <Link to="/categories">Back to categories</Link>
    </div>
  );
};

export default AddCategoryPage;
