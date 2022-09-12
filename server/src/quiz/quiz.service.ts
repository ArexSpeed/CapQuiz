import { Injectable } from '@nestjs/common';
import { resultsData } from '../data/results.data';
import { Results } from '../interfaces/results.interface';
import { categories, quizData } from '../data/quiz.data';
import { Category, Questions, Quiz } from '../interfaces/quiz.interface';

@Injectable()
export class QuizService {
  private quizzes: Quiz[] = quizData;
  private quizCategories: Category[] = categories;
  private results: Results[] = resultsData;
  getCategories(): Category[] {
    return this.quizCategories;
  }
  getAllQuiz(): Quiz[] {
    return this.quizzes;
  }
  getOneQuiz(categoryName: string) {
    return this.quizzes.find((quiz) => quiz.category === categoryName);
  }
  addQuestions(
    categoryName: string,
    question: string,
    ans1: string,
    ans2: string,
    ans3: string,
    ans4: string,
    correct: number,
  ) {
    // const category = {
    //   id: '',
    //   name: '',
    // };
    // const findCategory = this.quizCategories.find(
    //   (cat) => cat.name === categoryName,
    // );
    // if (!findCategory) {
    //   category.id = (Math.random() * 100000).toString();
    //   category.name = categoryName;
    // } else {
    //   category.id = findCategory.id;
    //   category.name = findCategory.name;
    // }
    const isCategoryNew = this.checkCategory(categoryName);
    const answers = this.addAnswers([ans1, ans2, ans3, ans4], correct);

    if (isCategoryNew.isNew) {
      const newQuiz: Quiz = {
        id: (Math.random() * 100000).toString(),
        category: categoryName,
        questions: [
          {
            id: (Math.random() * 100000).toString(),
            question,
            answers,
          },
        ],
      };
      this.quizzes.push(newQuiz);
      return 'Add new Quiz';
    } else {
      const addQuestion: Questions = {
        id: (Math.random() * 100000).toString(),
        question,
        answers,
      };
      this.quizzes[isCategoryNew.index].questions.push(addQuestion);
      return 'Update quiz name';
    }
  }

  checkCategory(categoryName: string) {
    const findCategory = this.quizCategories.find(
      (cat) => cat.name === categoryName,
    );
    console.log({ findCategory });
    if (findCategory) {
      const quizIndex = this.quizzes.findIndex(
        (quiz) => quiz.category === findCategory.name,
      );
      console.log({ quizIndex });
      return {
        isNew: false,
        index: quizIndex,
      };
    } else {
      console.log('Create new category');
      return {
        isNew: true,
      };
    }
  }

  addAnswers(answers: string[], correct: number) {
    const newAnswers = [];
    answers.map((a, i) =>
      newAnswers.push({
        id: (Math.random() * 100000).toString(),
        content: a,
        correct: correct - 1 === i,
      }),
    );

    return newAnswers;
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
    this.results.push(newScore);
    return {
      isSuccess: true,
      message: 'Your score is saved',
    };
  }
}
