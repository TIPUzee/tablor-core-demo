// Angular modules
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

// App Components - Search
import { SearchByStringQueryComponent } from './search/search-by-string-query/search-by-string-query.component'
import { SearchByDateRangesComponent } from './search/search-by-date-range/search-by-date-ranges.component'
import { SearchByNumberRangesComponent } from './search/search-by-number-ranges/search-by-number-ranges.component'
import { SearchByExactValuesComponent } from './search/search-by-exact-values/search-by-exact-values.component'
import { SearchByVoidComponent } from './search/search-by-void/search-by-void.component'
import { SearchByCustomFnComponent } from './search/search-by-custom-fn/search-by-custom-fn.component'
import { SearchedOptionsComponent } from './search/searched-options/searched-options.component'

// App Components - Sort
import { SortComponent } from './sort/sort/sort.component'
import { SortedOptionsComponent } from './sort/sorted-options/sorted-options.component'

// App Components - Pagination
import { PaginationComponent } from './pagination/pagination.component'

// App Components - Dataset
import { Transaction, transactionFields } from '../dataset/transactions-type'
import { transactionsDataset } from '../dataset/transactions-dataset'

// The `TablorCore` Library
import { TablorCore } from 'tablor-core-beta'
import { SelectedItemsComponent } from './select/selected-items/selected-items.component'
import { SelectComponent } from './select/select/select.component'
import { FeaturesBoardComponent } from './features-board/features-board.component'


@Component({
    selector: 'app-root',
    imports: [
        PaginationComponent,
        SearchByDateRangesComponent,
        FormsModule,
        SearchedOptionsComponent,
        SearchByStringQueryComponent,
        SearchByNumberRangesComponent,
        SearchByVoidComponent,
        SearchByExactValuesComponent,
        SearchByCustomFnComponent,
        SortComponent,
        SortedOptionsComponent,
        SelectedItemsComponent,
        SelectComponent,
        FeaturesBoardComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent
{
    tablor: TablorCore<Transaction>


    constructor()
    {
        this.tablor = new TablorCore()
        this.tablor.initializeFields(transactionFields)
        this.tablor.initializeItems(transactionsDataset)
    }


    sort(fieldKey: keyof Transaction)
    {
        this.tablor.sort({
            field: fieldKey,
            order: 'Toggle',
            supportedToggleOrders: ['ASC', 'DESC', 'NONE'],
        })
    }
}
