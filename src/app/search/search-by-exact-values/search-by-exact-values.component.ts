import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore, TablorCoreTypes as TcT } from 'tablor-core'


@Component({
    selector: 'app-search-by-exact-values',
    imports: [
        FormsModule,
    ],
    templateUrl: './search-by-exact-values.component.html',
})
export class SearchByExactValuesComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    // No need to implement in HTML template
    // Just hardcode for testing purposes for yourself
    form: TcT<Transaction>['DraftExactValueSearchOptions'] = {
        values: {},
        mustMatchAllFields: true,
        customCompareFns: {},

        // Common Options For All Search Types
        searchTarget: {
            scope: 'All',
        },
        prevResults: {
            action: 'Clear',
            scope: 'Single',
            target: 'Last',
        },
        revertResultsAtEnd: false,
    }


    constructor()
    { }


    search()
    {
        console.log('Draft `Exact Values` Options', this.form)
        this.tablor.searchByExactValues(this.form)
    }

}
