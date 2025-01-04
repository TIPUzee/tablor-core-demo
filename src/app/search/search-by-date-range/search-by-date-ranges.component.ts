import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore, TablorCoreTypes as TcT } from 'tablor-core-beta'


@Component({
    selector: 'app-search-by-date-ranges',
    imports: [
        FormsModule,
    ],
    templateUrl: './search-by-date-ranges.component.html',
})
export class SearchByDateRangesComponent
{
    // To get the keys of an object in the HTML template
    protected readonly Object = Object

    @Input({ required: true }) tablor!: TablorCore<Transaction>

    form: TcT<Transaction>['DraftDateRangeSearchOptions'] = {
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
        console.log('Draft `Date Ranges` Options', this.form)
        this.tablor.searchByDateTimesRanges(this.form)
    }


    addDateRange(_field: string)
    {
        const field = _field as keyof Transaction

        if (!this.form.ranges[field])
            this.form.ranges[field] = []

        // @ts-ignore
        this.form.ranges[field].push({
            start: undefined,
            end: undefined,
            startOffset: {
                years: 0,
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                milliseconds: 0,
            },
            endOffset: {
                years: 0,
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                milliseconds: 0,
            },
            includeStart: true,
            includeEnd: false
        })
    }


    getFields(obj: any): (keyof Transaction)[]
    {
        return Object.keys(obj) as any
    }


    isDateObj(obj: any): obj is Date
    {
        return obj !== 'Now' && obj !== undefined && obj !== 'undefined'
    }


    getDummyDate(prevDate: any, title: boolean = false): string
    {
        if (this.isDateObj(prevDate))
            return prevDate as any

        if (title)
            return 'Specific'

        return '2025-01-01T00:00'
    }


    getDummyNumber(prevNumber: any, title: boolean = false): string | number
    {
        if (typeof (prevNumber) === 'number')
            return prevNumber

        if (title)
            return 'Specific'

        return -1
    }

        deleteDateRange(_field: string, index: number)
    {
        const field = _field as keyof Transaction
        if (!this.form.ranges[field])
            return

        this.form.ranges[field].splice(index, 1)
        if (this.form.ranges[field].length === 0)
            delete this.form.ranges[field]
    }
}
