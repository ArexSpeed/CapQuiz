import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../components/Nav";

interface Categories {
  id: string;
  name: string;
}

const CategoryListPage = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [toDelete, setToDelete] = useState({
    id: "",
    name: "",
  });
  useEffect(() => {
    const fetchCategories = async () => {
      await fetch(`http://localhost:5000/categories`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setCategories(data));
    };

    fetchCategories();
  }, []);

  const deleteCategory = async () => {
    const response = await fetch(
      `http://localhost:5000/categories/${toDelete.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //console.log({ response });
    if (response.ok) {
      setToDelete({
        id: "",
        name: "",
      });
    }
  };

  return !toDelete.id ? (
    <div>
      <Nav />
      <Link to="/categories/add">Add new</Link>
      {categories?.map((category) => (
        <div key={category.id}>
          <Link to={`/categories/edit/${category.id}`}>{category.name}</Link>
          <button
            onClick={() =>
              setToDelete({
                id: category.id,
                name: category.name,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <p>Are you sure to delete {toDelete.name}</p>
      <button onClick={deleteCategory}>Yes</button>
      <button
        onClick={() =>
          setToDelete({
            id: "",
            name: "",
          })
        }
      >
        No
      </button>
    </div>
  );
};

export default CategoryListPage;
