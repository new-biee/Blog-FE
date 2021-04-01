import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../../service/category.service";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: any;

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  submit() {
    let category = this.categoryForm.value;
    this.categoryService.createNewCategory(category).subscribe(() => {

    })
  }
}
