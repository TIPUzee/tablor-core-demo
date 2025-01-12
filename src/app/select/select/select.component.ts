import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-select',
    imports: [CommonModule],
    templateUrl: './select.component.html',
})
export class SelectComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>
}
