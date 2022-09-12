import { useContext, useEffect, useRef, useState, FormEvent } from "react";
import { Nav } from "../../components/Nav";
import { UserContext } from "../../context/UserContext";

interface Categories {
  id: string;
  name: string;
}

const AddQuestionPage = () => {
  const { currentUser } = useContext(UserContext);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const formRef = useRef(null!);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [addNewCategory, setAddNewCategory] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchUserRole = async () => {
      await fetch(`http://localhost:5000/users/role/${currentUser}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setIsUserAdmin(data.isAdmin));
    };

    fetchUserRole();
  }, [currentUser]);

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    const payload = {
      category: form.get("category"),
      question: form.get("question"),
      ans1: form.get("ans1"),
      ans2: form.get("ans2"),
      ans3: form.get("ans3"),
      ans4: form.get("ans4"),
      correct: form.get("correct"),
    };

    console.log({ payload });
    const response = await fetch("http://localhost:5000/quiz", {
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

  return (
    <div className="container">
      <Nav />
      {submitted && <h3>Great you added new quiz!</h3>}
      {isUserAdmin ? (
        <form onSubmit={handleSubmit} ref={formRef}>
          {addNewCategory ? (
            <div>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                name="category"
                placeholder="enter a category"
                required
              />
              <button type="button" onClick={() => setAddNewCategory(false)}>
                Select category
              </button>
            </div>
          ) : (
            <div>
              <label htmlFor="category">Category:</label>
              <select name="category">
                {categories?.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button type="button" onClick={() => setAddNewCategory(true)}>
                Add new category
              </button>
            </div>
          )}
          <div>
            <label htmlFor="question">Question:</label>
            <input
              type="text"
              name="question"
              placeholder="enter a question"
              required
            />
          </div>
          <div>
            <label htmlFor="ans1">Answer1:</label>
            <input
              type="text"
              name="ans1"
              placeholder="enter a first answer"
              required
            />
          </div>
          <div>
            <label htmlFor="ans2">Answer2:</label>
            <input
              type="text"
              name="ans2"
              placeholder="enter a second answer"
              required
            />
          </div>
          <div>
            <label htmlFor="ans3">Answer3:</label>
            <input
              type="text"
              name="ans3"
              placeholder="enter a third answer"
              required
            />
          </div>
          <div>
            <label htmlFor="ans4">Answer4:</label>
            <input
              type="text"
              name="ans4"
              placeholder="enter a fourth answer"
              required
            />
          </div>
          <div>
            <label htmlFor="correct">Correct Answer:</label>
            <select name="correct">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>You are not Admin, you cannot add new quiz!</h2>
      )}
    </div>
  );
};

export default AddQuestionPage;
