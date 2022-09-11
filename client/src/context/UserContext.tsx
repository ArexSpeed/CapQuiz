import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<{
  currentUser: string;
  selectedQuiz: string;
  setUser: (user: string) => void;
  setQuiz: (quiz: string) => void;
}>({
  currentUser: '',
  selectedQuiz: '',
  setUser: () => null,
  setQuiz: () => null,
});

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState('');

  const setUser = (user: string) => {
    setCurrentUser(user);
  }

  const setQuiz = (quiz: string) => {
    setSelectedQuiz(quiz);
  }

  const value = {
    currentUser,
    selectedQuiz,
    setUser,
    setQuiz
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}