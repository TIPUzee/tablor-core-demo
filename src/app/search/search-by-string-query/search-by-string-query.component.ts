import { Component, Input, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Transaction } from '../../../dataset/transactions-type'

import { TablorCore, TablorCoreTypes as TcT } from 'tablor-core'
import { format } from 'date-fns'


@Component({
    selector: 'app-search-by-string-query',
    imports: [
        FormsModule,
    ],
    templateUrl: './search-by-string-query.component.html',
})
export class SearchByStringQueryComponent implements OnInit
{
    // To get the keys of an object in the HTML template
    protected readonly Object = Object

    @Input({ required: true }) tablor!: TablorCore<Transaction>

    form: TcT<Transaction>['DraftStringQuerySearchOptions'] = {
        query: '',
        includeFields: this.tablor?.getFieldsKeys(),
        singleWordMatchCriteria: 'Contains',
        requireAllWords: true,
        consecutiveWords: false,
        wordsInOrder: false,
        isCaseSensitive: false,
        convertToString: {
            string: s => s,
            number: undefined,
            date: undefined,
            boolean: undefined,
            null: undefined,
            undefined: undefined,
        },
        ignoreWhitespace: true,
        wordSeparators: [' '],

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


    ngOnInit()
    {
        this.form.includeFields = this.tablor.getFieldsKeys()
    }


    search()
    {
        console.log('Draft `String Query` Options', this.form)
        this.tablor.searchByStringQuery(this.form)
    }


    toggleIncludeField(field: keyof Transaction)
    {
        const includeFields = this.form.includeFields as (keyof Transaction)[]

        if (includeFields.includes(field))
            includeFields.splice(includeFields.indexOf(field), 1)
        else
            includeFields.push(field)
    }


    toggleAllIncludeFields()
    {
        this.tablor.getFieldsAsArray().forEach(field => this.toggleIncludeField(field.key))
    }


    getDummyNumber(prevNumber: any, title: boolean = false): string | number
    {
        if (typeof (prevNumber) === 'number')
            return prevNumber

        if (title)
            return 'Specific'

        return -1
    }


    setConvertToString(type: string, active: boolean)
    {
        let newValue: any

        if (!active)
            newValue = undefined
        else if (type === 'string')
            newValue = (s: string) => s
        else if (type === 'number')
            newValue = (n: number) => n.toString()
        else if (type === 'date')
            newValue = (d: Date) => format(d, 'do MMMM yyyy')
        else if (type === 'boolean')
            newValue = (b: boolean) => b.toString()
        else if (type === 'null')
            newValue = () => 'Null'
        else if (type === 'undefined')
            newValue = () => 'Undefined'

        this.form.convertToString = {
            ...this.form.convertToString,
            [type]: newValue,
        }
    }
}
