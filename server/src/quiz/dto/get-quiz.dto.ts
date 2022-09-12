import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class Answers {
  @IsString()
  id: string;
  @IsString()
  content: string;
}

export class Questions extends Answers {
  @IsString()
  id: string;
  @IsString()
  question: string;
  answers: Answers[];
}

export class GetQuizDto extends Questions {
  @IsString()
  id: string;
  @IsString()
  category: string;
  questions: Questions[];
}
