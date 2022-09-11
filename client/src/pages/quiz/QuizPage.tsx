import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

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

const QuizPage = () => {
  const { selectedQuiz } = useContext(UserContext);
  const [quiz, setQuiz] = useState<Quiz>();
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [searchParams] = useSearchParams();
  const [qNo, setQNo] = useState(1);

  console.log(searchParams.get("question"));

  useEffect(() => {
    const fetchResults = async () => {
      await fetch(`http://localhost:5000/quiz/${selectedQuiz}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setQuiz(data));
    };

    fetchResults();
  }, [selectedQuiz]);

  useEffect(() => {
    console.log({ quiz });
    if (quiz) setQuestions(quiz?.questions);
  }, [quiz]);
  return (
    <div>
      <div>
        {qNo}. {questions[qNo - 1]?.question}
      </div>
      <div>
        {questions[qNo - 1]?.answers.map((answer) => (
          <div>{answer.content}</div>
        ))}
      </div>
      <button onClick={() => setQNo((prev) => prev - 1)}>Prev</button>
      {qNo >= 5 &&  <button>Finish</button>}
      {qNo < 5 && <button onClick={() => setQNo((prev) => prev + 1)}>Next</button>}
    </div>
  );
};

export default QuizPage;
