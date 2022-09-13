// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    @Inject(CategoriesService) private categoriesService: CategoriesService,
  ) {}
  @Get('/')
  getAllCategories() {
    return this.categoriesService.getCategories();
  }
  // @Get('/')
  // getAllCategories(@Query() query: string) {
  //   console.log({ query });
  //   return this.categoriesService.getOneCategory(query);
  // }
  // @Get('/')
  // getAllCategories(@Query('id') id: string) {
  //   console.log({ id });
  //   return this.categoriesService.getOneCategory(id);
  // }
  @Get('/:id')
  getOneCategories(@Param('id') id: string) {
    return this.categoriesService.getOneCategory(id);
  }
  @Post('/')
  createCategory(@Body('name') name: string) {
    console.log({ name });
    return this.categoriesService.addCategory(name);
  }
  @Patch('/:id')
  updateCategory(
    @Param('id') categoryId: string,
    @Body('name') categoryName: string,
  ) {
    this.categoriesService.updateCategory(categoryId, categoryName);
    return null;
  }
  @Delete('/:id')
  deleteCategory(@Param('id') categoryId: string) {
    this.categoriesService.deleteCategory(categoryId);
    return null;
  }

  /* Req
  getAllCategories(@Req() request: Request) {
    console.log(request);
    return this.categoriesService.getCategories();
  }
  */
}
