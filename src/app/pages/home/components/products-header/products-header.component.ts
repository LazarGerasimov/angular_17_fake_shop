import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.scss',
})
export class ProductsHeaderComponent {
  sort = 'desc';
  itemsShowCount = 12;

  @Output() columnsCountChange = new EventEmitter<number>();
  
  onSortUpdated(newSort: string) {
    this.sort = newSort;
  }

  onItemsUpdated(count: number) {
    this.itemsShowCount = count
  }

  onColumnsUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum);
  }


}
