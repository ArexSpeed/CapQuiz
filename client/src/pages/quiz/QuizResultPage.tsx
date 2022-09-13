import React, { useContext, useEffect, useState } from "react";
import { Nav } from "../../components/Nav";
import { UserContext } from "../../context/UserContext";

const QuizResultPage = () => {
  const { currentUser, selectedQuiz, selectedAnswers } =
    useContext(UserContext);
  const [score, setScore] = useState(0);

  const sendResults = async () => {
    const payload = {
      userName: currentUser,
      quizName: selectedQuiz,
      answers: selectedAnswers,
    };

    await fetch("http://localhost:5000/results", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setScore(data.score));
  };

  useEffect(() => {
    sendResults();
  }, [selectedAnswers]);

  return (
    <div className="container">
      <Nav />
      <h2>Congrats! You got {score}</h2>
      <p>Your answers:</p>
      {selectedAnswers.map((answer) => (
        <div key={answer.id}>
          {answer.qNo} : {answer.content}
        </div>
      ))}
    </div>
  );
};

export default QuizResultPage;
