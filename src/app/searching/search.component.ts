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
        'status', 'merchant', 'receiptUrl', 'initiatedBy', 'notes', 'createdAt',
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

        // this.tablor.searchByStringQuery({
        //     query: ($event.target as HTMLInputElement).value,
        //     includeFields: this.stringFields,
        //     prevResults: {
        //         action: 'Clear',
        //         scope: 'All',
        //     },
        //     // To search in non-string fields
        //     // Search date 22/2/24 as 22 2 24
        //     convertToString: {
        //         string: s => s,
        //         date: d => d.toLocaleDateString(),
        //         number: n => Math.floor(n).toString(),
        //         boolean: b => b.toString(),
        //     },
        //     // To search for consecutive and in order words
        //     consecutiveWords: true,
        //     wordsInOrder: true,
        //     wordSeparators: [' ', '/']
        // })
    }
}
