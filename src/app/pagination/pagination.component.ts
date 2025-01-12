import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Transaction } from '../../dataset/transactions-type'

import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-pagination',
    imports: [FormsModule],
    templateUrl: './pagination.component.html',
})
export class PaginationComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>
}
