import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { Nav } from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export type Answers = {
  id: string;
  content: string;
  correct: boolean;
};

export type Questions = {
  id: string;
  question: string;
  answers: Answers[];
};

export type Category = {
  id: string;
  name: string;
};

export interface Quiz {
  id: string;
  category: string;
  questions: Questions[];
}

const MainPage = () => {
  let navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const { setQuiz } = useContext(UserContext)

  useEffect(() => {
    const fetchCategories = async () => {
      await fetch(`http://localhost:5000/quiz`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setQuizzes(data));
    };

    fetchCategories();
  }, []);

  const selectQuiz = (category: string) => {
    setQuiz(category)
    navigate("/quiz");
  }
  
  return (
    <div>
      <Nav />
      Hello User List of quizzes
      <div>
        {quizzes?.map((quiz) => (
          <button key={quiz.id} onClick={() => selectQuiz(quiz.category)}>{quiz.category}</button>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
