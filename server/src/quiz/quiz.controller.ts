import { Controller, Get, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }
  @Get('/:categoryName')
  getOneQuiz(@Param('categoryName') categoryName: string) {
    return this.quizService.getOneQuiz(categoryName);
  }
}
