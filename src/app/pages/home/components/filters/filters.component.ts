import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { StoreService } from '../../../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatExpansionModule, MatListModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] | undefined;
  categoriesSubscription!: Subscription;

  private storeService = inject(StoreService);

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((res) => (this.categories = res));
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
