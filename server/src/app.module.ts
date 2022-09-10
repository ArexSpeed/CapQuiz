import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [QuizModule, CategoriesModule, UsersModule, ResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
