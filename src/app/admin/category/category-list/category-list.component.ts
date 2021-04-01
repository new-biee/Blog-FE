import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from "../../../../model/category";
import {CategoryService} from "../../../../service/category.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: any;

  displayedColumns: string[] = ['id', 'name', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe(value => {
      console.log(value);
      this.categories = value;
      this.categories = new MatTableDataSource(value);
      this.categories.paginator = this.paginator;
      this.categories.sort = this.sort;
    }, error => {
      console.log(error)
    });
  }
}
