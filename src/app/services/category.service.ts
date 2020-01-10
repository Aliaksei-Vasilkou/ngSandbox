import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../domain/category';

// const categories: Category[] = [
//   {id: 1, name: 'Category_1', description: 'Some description_1'},
//   {id: 2, name: 'Category_2', description: 'Some description_2'},
//   {id: 3, name: 'Category_3', description: 'Some description_3'},
//   {id: 4, name: 'Category_4', description: 'Some description_4'},
//   {id: 5, name: 'Category_5', description: 'Some description_5'},
//   {id: 6, name: 'Category_6'},
//   {id: 7, name: 'Category_7'},
//   {id: 8, name: 'Category_8'},
//   {id: 9, name: 'Category_9'}
// ];

const apiUrl = 'https://66aa2e09-95b1-47f8-986a-3c55407f7c26.mock.pstmn.io/api';

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    console.log(apiUrl);
    return this.httpClient.get<Category[]>(apiUrl);
  }
}
