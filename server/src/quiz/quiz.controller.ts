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
  @Post('/')
  addQuiz(
    @Body('category') category: string,
    @Body('question') question: string,
    @Body('answer1') ans1: string,
    @Body('answer2') ans2: string,
    @Body('answer3') ans3: string,
    @Body('answer4') ans4: string,
    @Body('correct') correct: number,
  ) {
    return this.quizService.addQuestions(
      category,
      question,
      ans1,
      ans2,
      ans3,
      ans4,
      correct,
    );
  }
}
