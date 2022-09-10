import { Injectable } from '@nestjs/common';
import { finishedQuizData } from '../data/finishedQuiz.data';
import { FinishedQuiz } from '../interfaces/finishedQuiz.interface';
import { categories, quizData } from '../data/quiz.data';
import { Category, Quiz } from '../interfaces/quiz.interface';

@Injectable()
export class QuizService {
  private quizzes: Quiz[] = quizData;
  private quizCategories: Category[] = categories;
  private finishData: FinishedQuiz[] = finishedQuizData;
  getCategories(): Category[] {
    return this.quizCategories;
  }
  getAllQuiz(): Quiz[] {
    return this.quizzes;
  }
  getOneQuiz(categoryName: string) {
    return this.quizzes.find((quiz) => quiz.category === categoryName);
  }
  saveScore(userName: string, quizId: string, score: number) {
    if (!userName || !quizId || !score) {
      return {
        isSuccess: false,
        message: 'Something went wrong',
      };
    }
    const id = Math.random() * 100000;
    const newScore = {
      id: id.toString(),
      userName,
      quizId,
      score,
    };
    this.finishData.push(newScore);
    return {
      isSuccess: true,
      message: 'Your score is saved',
    };
  }
}
