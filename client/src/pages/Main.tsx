import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Nav } from "../components/Nav";
import { useNavigate } from "react-router-dom";

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
    const fetchQuestion = async () => {
      await fetch(`http://localhost:5000/quiz/${category}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    fetchQuestion();
    navigate("/quiz?question=1");
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
