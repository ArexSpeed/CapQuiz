import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface SelectedAnswer {
  qNo: number;
  id: string;
  content: string;
}

interface Answer {
  id: string;
  content: string;
}

export const UserContext = createContext<{
  currentUser: string;
  selectedQuiz: string;
  selectedAnswers: SelectedAnswer[];
  setUser: (user: string) => void;
  setQuiz: (quiz: string) => void;
  addAnswer: (answer: Answer, questionNo: number) => void;
}>({
  currentUser: "",
  selectedQuiz: "",
  selectedAnswers: [],
  setUser: () => null,
  setQuiz: () => null,
  addAnswer: () => null,
});

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);
  const [answerSwitcher, setAnswerSwitcher] = useState<boolean>(true);

  const setUser = (user: string) => {
    setCurrentUser(user);
  };

  const setQuiz = (quiz: string) => {
    setSelectedQuiz(quiz);
  };

  const addAnswer = (answer: Answer, questionNo: number) => {
    const isCurrentAnswer = selectedAnswers.find(
      (ans) => ans.qNo === questionNo
    );
    if (isCurrentAnswer) {
      const findIndex = selectedAnswers.findIndex(
        (ans) => ans.qNo === questionNo
      );
      selectedAnswers[findIndex] = {
        qNo: questionNo,
        id: answer.id,
        content: answer.content,
      };
      setAnswerSwitcher(!answerSwitcher);
    } else {
      setSelectedAnswers((prev) => [
        ...prev,
        {
          qNo: questionNo,
          id: answer.id,
          content: answer.content,
        },
      ]);
      setAnswerSwitcher(!answerSwitcher);
    }
  };

  const value = {
    currentUser,
    selectedQuiz,
    selectedAnswers,
    setUser,
    setQuiz,
    addAnswer,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
