// Angular
import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DatePipe, NgClass } from '@angular/common'
// Spartan UI Helm
import { HlmCheckboxImports } from '@spartan-ng/ui-checkbox-helm'
// Tablor Core
import { TablorCore } from 'tablor-core'
// Dataset
import { Transaction, TransactionTcT } from '../../dataset/transactions-type'


@Component({
    selector: 'app-item',
    imports: [
        // Angular
        FormsModule,
        NgClass,
        DatePipe,
        // Spartan UI Helm
        HlmCheckboxImports,
    ],
    templateUrl: './item.component.html',
})
export class ItemComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    @Input({ required: true }) item!: TransactionTcT['AugmentedItem']
}
