import { Component, OnInit } from '@angular/core';
import { Category } from '../../domain/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-item-list',
  templateUrl: './category-item-list.component.html',
  styleUrls: ['./category-item-list.component.css']
})
export class CategoryItemListComponent implements OnInit {

  private categories: Category[];

  constructor(private service: CategoryService) {
  }

  ngOnInit() {
    this.service.getCategories()
      .subscribe(category => {
          this.categories = category;
        }, err => {
          console.log('Error message');
        }, () => console.log('Reseived all categories')
      );
  }
}
