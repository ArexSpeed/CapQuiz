import { Injectable, NotFoundException } from '@nestjs/common';
import { categories } from 'src/data/quiz.data';
import { Category } from 'src/interfaces/quiz.interface';

@Injectable()
export class CategoriesService {
  private quizCategories: Category[] = categories;
  getCategories(): Category[] {
    return this.quizCategories;
  }
  getOneCategory(id: string): Category {
    console.log(id, 'service');
    return this.quizCategories.find((category) => category.id === id);
  }
  addCategory(name: string) {
    const id = Math.random() * 100000;
    const newCategory = {
      id: id.toString(),
      name,
    };
    this.quizCategories.push(newCategory);

    return {
      isSuccess: true,
    };
  }
  updateCategory(id: string, newName: string) {
    const [category, index] = this.findCategory(id);
    const updatedCategory = { ...category };
    updatedCategory.name = newName;
    this.quizCategories[index] = updatedCategory;
  }
  deleteCategory(categoryId: string) {
    const [_, index] = this.findCategory(categoryId);
    this.quizCategories.splice(index, 1);
  }

  private findCategory(id: string): [Category, number] {
    const index = this.quizCategories.findIndex(
      (category) => category.id === id,
    );
    const category = this.quizCategories[index];
    if (!category) {
      throw new NotFoundException('Could not find this category.');
    }
    return [category, index];
  }
}
