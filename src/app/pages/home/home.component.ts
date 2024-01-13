import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, ProductsHeaderComponent, FiltersComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  public cols = 3; // default 
  public category: string | undefined;

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    // console.log(this.cols)
  }

  onShowCategory(newCategory: string) {
    this.category = newCategory;
    console.log(this.category)
  }
}
