import { Injectable } from '@nestjs/common';
import { quizData } from 'src/data/quiz.data';
import { Quiz } from 'src/interfaces/quiz.interface';
import { resultsData } from '../data/results.data';
import { AddResultsResponse, Results } from '../interfaces/results.interface';
import { AddResultDto } from './dto/add-result.dto';

@Injectable()
export class ResultsService {
  private results: Results[] = resultsData;
  private quizzes: Quiz[] = quizData;
  getUserResults(userName: string): Results[] {
    const userResults = this.results.filter(
      (result) => result.userName === userName,
    );
    return userResults;
  }
  async addResult(result: AddResultDto): Promise<AddResultsResponse> {
    const score = await this.checkScore(result.answers, result.quizName);
    const id = Math.random() * 100000;
    const newResult = {
      id: id.toString(),
      userName: result.userName,
      quizName: result.quizName,
      score,
    };
    this.results.push(newResult);
    return {
      isSuccess: true,
      score,
    };
  }

  checkScore(
    answers: Array<{
      id: string;
      content: string;
    }>,
    quizCategory: string,
  ) {
    const quiz = this.quizzes.find((quiz) => quiz.category === quizCategory);
    const getAnswers = quiz.questions.map((q) => q.answers);
    let score = 0;
    console.log({ getAnswers });
    console.log({ answers });
    for (let i = 0; i < answers.length; i++) {
      console.log('for', i);
      const findAnswer = getAnswers[i].find(
        (answer) => answer.id === answers[i].id,
      );
      console.log({ findAnswer });
      if (findAnswer.correct) score++;
    }
    return score;
  }
}
