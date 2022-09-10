import { Controller, Get, Param, Query } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private resultsService: ResultsService) {}
  @Get('/:userName')
  getUserResults(@Param('userName') userName: string) {
    return this.resultsService.getUserResults(userName);
  }
  @Get('/')
  getOtherUserResults(@Query('userName') userName: string) {
    return this.resultsService.getUserResults(userName);
  }
}
