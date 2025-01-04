import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore, TablorCoreTypes as TcT } from 'tablor-core-beta'


@Component({
    selector: 'app-search-by-custom-fn',
    imports: [
        FormsModule,
    ],
    templateUrl: './search-by-custom-fn.component.html',
})
export class SearchByCustomFnComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    // No need to implement in HTML template
    // Just hardcode for testing purposes for yourself
    form: TcT<Transaction>['DraftCustomSearchOptions'] = {
        customName: 'MyTestFn',
        customFn: this.customFn.bind(this),

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
        console.log('Draft `Custom Fn` Options', this.form)
        this.tablor.searchByCustomFn(this.form)
    }


    customFn(
        item: TcT<Transaction>['ImmutableAugmentedItem'],
        items: Readonly<TcT<Transaction>['ImmutableAugmentedItem'][]>,
    ): boolean
    {
        return true
    }
}
