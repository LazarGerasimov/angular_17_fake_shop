import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, ProductsHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  public cols = 3; // default 

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    console.log(this.cols)
  }
}
