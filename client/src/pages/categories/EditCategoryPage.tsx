import { useState, useEffect, useRef, FormEvent } from "react";
import { useParams, Link } from "react-router-dom";

interface Categories {
  id: string;
  name: string;
}

const EditCategoryPage = () => {
  let { categoryId } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState<Categories>({
    id: "",
    name: "",
  });
  const formRef = useRef(null!);

  useEffect(() => {
    const fetchCategories = async () => {
      await fetch(`http://localhost:5000/categories/${categoryId}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setCategory(data));
    };

    fetchCategories();
  }, [categoryId]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    const payload = {
      name: form.get("name"),
    };

    const response = await fetch(
      `http://localhost:5000/categories/${categoryId}`,
      {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //console.log({ response });
    if (response.ok) {
      setSubmitted(true);
    }
  }

  return !submitted ? (
    <div>
      <p>You want to change {category.name}</p>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="enter a name" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  ) : (
    <div>
      {" "}
      You updated Category!
      <Link to="/categories">Back to categories</Link>
    </div>
  );
};

export default EditCategoryPage;
