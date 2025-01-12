import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore, TablorCoreTypes as TcT } from 'tablor-core'


@Component({
    selector: 'app-search-by-void',
    imports: [
        FormsModule,
    ],
    templateUrl: './search-by-void.component.html',
})
export class SearchByVoidComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    // No need to implement in HTML template
    // Just hardcode for testing purposes for yourself
    form: TcT<Transaction>['DraftVoidSearchOptions'] = {
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
        console.log('Draft `Void` Options', this.form)
        this.tablor.searchByVoid(this.form)
    }

}
