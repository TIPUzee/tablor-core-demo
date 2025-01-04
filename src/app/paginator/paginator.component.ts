import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Transaction } from '../../dataset/transactions-type'

import { TablorCore } from 'tablor-core-beta'


@Component({
    selector: 'app-paginator',
    imports: [
        FormsModule,
    ],
    templateUrl: './paginator.component.html',
})
export class PaginatorComponent
{

    @Input({ required: true }) tablor!: TablorCore<Transaction>

    currPageNb: number = 1
}
