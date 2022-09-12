import { forwardRef, Module } from '@nestjs/common';
import { CategoriesModule } from 'src/categories/categories.module';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  imports: [forwardRef(() => CategoriesModule)],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
