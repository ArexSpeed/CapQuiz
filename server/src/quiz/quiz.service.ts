import { Injectable } from '@nestjs/common';
import { categories, quizData } from '../data/quiz.data';
import { Category, Quiz } from '../interfaces/quiz.interface';

@Injectable()
export class QuizService {
  private quizzes: Quiz[] = quizData;
  private quizCategories: Category[] = categories;
  getCategories(): Category[] {
    return this.quizCategories;
  }
  getAllQuiz(): Quiz[] {
    return this.quizzes;
  }
  getOneQuiz(categoryName: string) {
    return this.quizzes.find((quiz) => quiz.category === categoryName);
  }
}
