// Angular
import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
// Spartan UI Helm
import { HlmInputModule } from '@spartan-ng/ui-input-helm'
// Tablor Core
import { TablorCore } from 'tablor-core'
// Dataset
import { Transaction } from '../../dataset/transactions-type'


@Component({
    selector: 'app-searching',
    imports: [
        // Angular
        FormsModule,
        // Spartan UI Helm
        HlmInputModule,
    ],
    templateUrl: './search.component.html',
})
export class SearchComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    stringFields: (keyof Transaction)[] = [
        'user', 'bank', 'description', 'amount', 'currency', 'transactionType',
        'status', 'merchant', 'receiptUrl', 'initiatedBy', 'notes',
    ]


    searchString($event: Event)
    {
        this.tablor.searchByStringQuery({
            query: ($event.target as HTMLInputElement).value,
            includeFields: this.stringFields,
            prevResults: {
                action: 'Clear',
                scope: 'All',
            },
        })
    }
}
