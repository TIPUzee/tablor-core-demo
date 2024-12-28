import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TablorCore, TablorCoreTypes as TcT } from 'tablor-core-beta'
import { Transaction } from '../transactions_config'
import { NgForOf, NgIf, NgFor } from '@angular/common'


@Component({
    selector: 'app-search',
    imports: [
        FormsModule,
        NgIf,
        NgForOf,
    ],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss',
})
export class SearchComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    currSearchType: string = 'stringSearch'
    targetItems: string = 'All'
    prevSearchBehavior: string = 'clearAll'
    indexToClear: number = 0

    fieldsToIncludeStringSearch: string =
        '["transactionId", "user", "bank", "transactionDate", ' +
        '"createdAt", "updatedAt", "amount", "currency", ' +
        '"transactionType", "status", "merchant", ' +
        '"receiptUrl", "initiatedBy", "notes"]'

    wordsStringSearch: string = ''
    wordSearchType: string = 'Contains'


    search()
    {
        switch (this.currSearchType)
        {
            case 'stringSearch':
                this.searchString()
                break
            case 'dateRanges':
                this.searchDateRanges()
                break
            case 'exactValues':
                this.searchExactValues()
                break
            case 'numberRanges':
                this.searchNumberRanges()
                break
            case 'voidSearch':
                this.searchVoid()
                break
        }
    }


    getSearchTarget()
    {
        let searchTarget

        switch (this.targetItems)
        {
            case 'Prev':
                searchTarget = { scope: 'Prev' }
                break
            case 'All':
                searchTarget = { scope: 'All' }
                break
        }

        return searchTarget
    }


    getPrevSearchBehavior()
    {
        let prevResults

        switch (this.prevSearchBehavior)
        {
            case 'clearAll':
                prevResults = { action: 'Clear', scope: 'All' }
                break
            case 'Keep':
                prevResults = { action: 'Keep' }
                break
            case 'clearLast':
                prevResults = { action: 'Clear', scope: 'Single', target: 'Last' }
                break
            case 'clearLastIfSame':
                prevResults = { action: 'Clear', scope: 'Single', target: 'LastIfSameType' }
                break
            case 'clearIndexed':
                prevResults = { action: 'Clear', scope: 'Single', target: Number(this.indexToClear) }
                break
        }

        return prevResults
    }


    // ====== For String Search ======
    searchString()
    {
        const fieldsToInclude: string[] = JSON.parse(this.fieldsToIncludeStringSearch)

        this.tablor.searchByStringQuery({
            query: this.wordsStringSearch,
            includeFields: fieldsToInclude as any,
            singleWordMatchCriteria: this.wordSearchType as any,
            searchTarget: this.getSearchTarget() as any,
            prevResults: this.getPrevSearchBehavior() as any,
        })
    }


    resetFieldsToIncludeStringSearch()
    {
        this.fieldsToIncludeStringSearch =
            '["transactionId", "user", "bank", "transactionDate", ' +
            '"createdAt", "updatedAt", "amount", "currency", ' +
            '"transactionType", "status", "merchant", ' +
            '"receiptUrl", "initiatedBy", "notes"]'
    }


    // ====== For Date Ranges ======
    searchDateRanges() {}


    // ====== For Exact Values ======
    searchExactValues() {}


    // ====== For Number Ranges ======
    searchNumberRanges() {}


    // ====== For Void Search ======
    searchVoid() {}


    test()
    {
        const a = this.tablor.getSearchOptions()[0]

        if (a.by === 'StringQuery') {
        }
    }
}
