export interface Results {
  id: string;
  userName: string;
  quizName: string;
  score: number;
}

export type AddResultsResponse = {
  isSuccess: boolean;
  score: number;
};
