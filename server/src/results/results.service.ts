import { Injectable } from '@nestjs/common';
import { finishedQuizData } from 'src/data/finishedQuiz.data';
import { FinishedQuiz } from 'src/interfaces/finishedQuiz.interface';

@Injectable()
export class ResultsService {
  private results: FinishedQuiz[] = finishedQuizData;
  getUserResults(userName: string): FinishedQuiz[] {
    const userResults = this.results.filter(
      (result) => result.userName === userName,
    );
    return userResults;
  }
}
