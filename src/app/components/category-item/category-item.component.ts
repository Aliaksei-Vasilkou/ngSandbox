import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../domain/category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  isMouseOver: boolean;

  @Input() category: Category;

  constructor() {
  }

  ngOnInit() {
  }

}
