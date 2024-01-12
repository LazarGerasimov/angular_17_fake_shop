import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatMenuModule],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.scss',
})
export class ProductsHeaderComponent {
  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: string) {
    this.sort = newSort
  }
}
