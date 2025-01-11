import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore, TablorCoreTypes as TcT } from 'tablor-core-beta'


@Component({
    selector: 'app-sort',
    imports: [FormsModule],
    templateUrl: './sort.component.html',
})
export class SortComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    form: TcT<Transaction>['DraftSortingOption'] = {
        field: 'transactionId',
        order: 'Toggle',
        supportedToggleOrders: ['ASC', 'DESC', 'NONE'],
        toggleOrderIndex: undefined, // `undefined` for Auto next index
        stringOptions: {
            caseSensitive: false,
            ignoreWhitespaces: false,
        },
        numberOptions: {
            ignoreDecimals: false,
        },
        prioritizeNulls: 'FirstOnASC',
        prioritizeUndefineds: 'FirstOnASC',
        insertBehavior: {
            insertAt: -1,
        },
        clear: {
            target: 'All',
        },
        customCompareFn: undefined,
        customCompareFnForNestedMatch: undefined,
        processingCallback: undefined,
    }

    toggleOrderIndexStrategy: 'MANUAL' | 'AUTO' = 'AUTO'


    constructor()
    { }


    sort()
    {
        if (this.toggleOrderIndexStrategy === 'AUTO') this.form.toggleOrderIndex = undefined

        console.log('Draft `Sort` Options', this.form)
        this.tablor.sort(this.form)
    }


    addSupportedToggleOrder(order: string)
    {
        this.form.supportedToggleOrders?.push(order as any)
    }


    removeSupportedToggleOrder(index: number)
    {
        this.form.supportedToggleOrders?.splice(index, 1)
    }
}
