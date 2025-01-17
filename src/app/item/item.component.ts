// Angular
import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DatePipe, NgClass } from '@angular/common'
// Spartan UI
import { HlmCheckboxImports } from '@spartan-ng/ui-checkbox-helm'
// Dataset
import { Transaction, TransactionTcT } from '../../dataset/transactions-type'
// The `TablorCore` Library
import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-item',
    imports: [
        // Angular
        FormsModule,
        NgClass,
        DatePipe,
        // Spartan UI
        HlmCheckboxImports,
    ],
    templateUrl: './item.component.html',
})
export class ItemComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    @Input({ required: true }) item!: TransactionTcT['AugmentedItem']
}
