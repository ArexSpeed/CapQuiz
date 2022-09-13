import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
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

export interface Quiz {
  id: string;
  category: string;
  questions: Questions[];
}

const QuizPage = () => {
  const { selectedQuiz, selectedAnswers, addAnswer } = useContext(UserContext);
  const [quiz, setQuiz] = useState<Quiz>();
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [searchParams] = useSearchParams();
  const [qNo, setQNo] = useState(1);
  //const [selectedAnswers, setSelectedAnswers] = useState<Answers[]>([]);

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
    <div className="container">
      <h3 style={{ margin: "16px" }}>
        {qNo}. {questions[qNo - 1]?.question}
      </h3>
      <div className="answersContainer">
        {questions[qNo - 1]?.answers.map((answer) => (
          <button
            key={answer.id}
            className={`answerButton ${
              selectedAnswers.find((a) => a.id === answer.id) && "selected"
            }`}
            onClick={() => addAnswer(answer, qNo)}
          >
            {answer.content}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => setQNo((prev) => prev - 1)}>Prev</button>
        {qNo >= 5 && <Link to="/quiz/result">Finish</Link>}
        {qNo < 5 && (
          <button onClick={() => setQNo((prev) => prev + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
