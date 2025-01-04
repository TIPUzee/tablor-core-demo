import { Component } from '@angular/core'

import { SearchByDateRangesComponent } from './search/search-by-date-range/search-by-date-ranges.component'
import { FormsModule } from '@angular/forms'
import { SearchedOptionsComponent } from './search/searched-options/searched-options.component'
import { SearchByStringQueryComponent } from './search/search-by-string-query/search-by-string-query.component'
import { SearchByNumberRangesComponent } from './search/search-by-number-ranges/search-by-number-ranges.component'
import { SearchByVoidComponent } from './search/search-by-void/search-by-void.component'
import { SearchByExactValuesComponent } from './search/search-by-exact-values/search-by-exact-values.component'
import { SearchByCustomFnComponent } from './search/search-by-custom-fn/search-by-custom-fn.component'
import { PaginatorComponent } from './paginator/paginator.component'

import { Transaction, transactionFields } from '../dataset/transactions-type'
import { transactionsDataset } from '../dataset/transactions-dataset'

import { TablorCore } from 'tablor-core-beta'


@Component({
    selector: 'app-root',
    imports: [
        PaginatorComponent,
        SearchByDateRangesComponent,
        FormsModule,
        SearchedOptionsComponent,
        SearchByStringQueryComponent,
        SearchByNumberRangesComponent,
        SearchByVoidComponent,
        SearchByExactValuesComponent,
        SearchByCustomFnComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent
{
    tablor: TablorCore<Transaction>

    currentSearchType: string = 'stringSearch'


    constructor()
    {
        this.tablor = new TablorCore()
        this.tablor.initializeFields(transactionFields)
        this.tablor.initializeItems(transactionsDataset)
    }
}
