// eslint-disable-next-line prettier/prettier
import { Controller, Get, Param, Post, Query, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddResultDto } from './dto/add-result.dto';
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
  @Post('/')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  addNewResult(@Body() result: AddResultDto) {
    //console.log({ result });
    return this.resultsService.addResult(result);
  }
}
