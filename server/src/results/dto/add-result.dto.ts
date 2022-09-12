import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class AddResultDto {
  @IsString()
  @IsNotEmpty()
  userName: string;
  @IsString()
  @IsNotEmpty()
  quizId: string;
  @IsArray()
  answers: Array<{
    id: string;
    content: string;
  }>;
}
