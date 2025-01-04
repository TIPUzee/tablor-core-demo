import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore, TablorCoreTypes as TcT } from 'tablor-core-beta'


@Component({
    selector: 'app-search-by-number-ranges',
    imports: [
        FormsModule,
    ],
    templateUrl: './search-by-number-ranges.component.html',
})
export class SearchByNumberRangesComponent
{
    // To get the keys of an object in the HTML template
    protected readonly Object = Object

    @Input({ required: true }) tablor!: TablorCore<Transaction>

    form: TcT<Transaction>['DraftNumberRangeSearchOptions'] = {
        ranges: {},
        mustMatchAllFields: true,

        // Common Options For All Search Types
        searchTarget: {
            scope: 'All',
        },
        prevResults: {
            action: 'Clear',
            scope: 'Single',
            target: 'Last',
        },
        revertResultsAtEnd: false,
    }


    constructor()
    { }


    search()
    {
        console.log('Draft `Number Ranges` Options', this.form)
        this.tablor.searchByNumbersRanges(this.form)
    }


    addNumberRange(_field: string)
    {
        const field = _field as keyof Transaction

        if (!this.form.ranges[field])
            this.form.ranges[field] = []

        // @ts-ignore
        this.form.ranges[field].push({
            min: undefined,
            max: undefined,
            includeMin: true,
            includeMax: false,
        })
    }


    getFields(obj: any): (keyof Transaction)[]
    {
        return Object.keys(obj) as any
    }


    getDummyNumber(prevNumber: any, title: boolean = false): string | number
    {
        if (typeof (prevNumber) === 'number')
            return prevNumber

        if (title)
            return 'Specific'

        return -1
    }


    deleteNumberRange(_field: string, index: number)
    {
        const field = _field as keyof Transaction
        if (!this.form.ranges[field])
            return

        this.form.ranges[field].splice(index, 1)
        if (this.form.ranges[field].length === 0)
            delete this.form.ranges[field]
    }
}
