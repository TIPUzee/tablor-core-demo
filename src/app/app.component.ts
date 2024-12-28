import { Component } from '@angular/core'

import { TablorCore, TablorCoreTypes } from 'tablor-core-beta'

import { Transaction, transactionFields } from './transactions_config'
import { transactions } from './transactions_dataset'
import { SearchComponent } from './search/search.component'


@Component({
    selector: 'app-root',
    imports: [
        SearchComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent
{
    title = 'tablor-core-beta-demo'

    tablor = new TablorCore<Transaction>()


    constructor()
    {
        this.tablor.initializeFields(transactionFields)
        this.tablor.initializeItems(transactions)
    }
}
