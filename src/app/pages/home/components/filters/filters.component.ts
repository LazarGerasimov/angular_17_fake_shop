import { Component, EventEmitter, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatExpansionModule, MatListModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'sports'];

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }
}
