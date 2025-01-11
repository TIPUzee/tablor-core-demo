import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore } from 'tablor-core-beta'


@Component({
    selector: 'app-sorted-options',
    imports: [CommonModule],
    templateUrl: './sorted-options.component.html',
})
export class SortedOptionsComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>
}
