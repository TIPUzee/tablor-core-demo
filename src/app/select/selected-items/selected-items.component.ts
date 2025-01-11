import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore } from 'tablor-core-beta'


@Component({
    selector: 'app-selected-items',
    imports: [CommonModule],
    templateUrl: './selected-items.component.html',
})
export class SelectedItemsComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>


    s = [1, 6, 3]
}
