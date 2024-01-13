import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductBoxComponent } from './components/product-box/product-box.component';

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    ProductsHeaderComponent,
    FiltersComponent,
    MatGridListModule,
    ProductBoxComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public cols = 3; // default
  public rowHeight = ROWS_HEIGHT[this.cols];
  public category: string | undefined;

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    // console.log(this.cols)
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string) {
    this.category = newCategory;
    console.log(this.category);
  }
}
