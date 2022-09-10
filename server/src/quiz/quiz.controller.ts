import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  @Post('/score')
  addScore(
    @Body('userName') userName: string,
    @Body('quizId') quizId: string,
    @Body('score') score: number,
  ) {
    return this.quizService.saveScore(userName, quizId, score);
  }
}
