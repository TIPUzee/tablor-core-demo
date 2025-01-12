import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-searched-options',
    imports: [CommonModule],
    templateUrl: './searched-options.component.html',
})
export class SearchedOptionsComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>
}
