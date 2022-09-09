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
