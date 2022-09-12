export interface Results {
  id: string;
  userName: string;
  quizId: string;
  score: number;
}

export type AddResultsResponse = {
  isSuccess: boolean;
  score: number;
};
