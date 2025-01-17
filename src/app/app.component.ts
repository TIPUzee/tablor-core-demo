// Angular
import { Component, OnInit } from '@angular/core'
// Spartan UI
import { toast } from 'ngx-sonner'
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm'
// App Components
import { SelectedItemActionsComponent } from './selected-item-actions/selected-item-actions.component'
import { PaginationComponent } from './pagination/pagination.component'
import { SortingComponent } from './sorting/sorting.component'
import { SearchComponent } from './searching/search.component'
import { ItemComponent } from './item/item.component'
import { NoticeBoardComponent } from './notice-board/notice-board.component'
// The `TablorCore` Library
import { TablorCore } from 'tablor-core'
// Dataset
import { Transaction, transactionFields, TransactionTcT } from '../dataset/transactions-type'
import { transactionsDataset } from '../dataset/transactions-dataset'


@Component({
    selector: 'app-root',
    imports: [
        // Spartan UI
        HlmToasterComponent,
        // App
        SelectedItemActionsComponent,
        PaginationComponent,
        SortingComponent,
        SearchComponent,
        ItemComponent,
        NoticeBoardComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit
{
    tablor: TablorCore<Transaction>


    constructor()
    {
        this.tablor = new TablorCore()
        this.tablor.initializeFields(transactionFields)

        this.linkEvents()
    }


    ngOnInit(): void
    {
        this.tablor.initializeItems(transactionsDataset) // Clears the previous items
        // this.tablor.addItems(transactionsDataset) // Adds to the previous items

        this.tablor.setNbOfItemsPerPage(20) // Default was 10
    }


    linkEvents()
    {
        // Define Callbacks

        // When Page Number Changes
        const pageNbChangedCb = (options: TransactionTcT['PageNbChangedPayload']) =>
        {
            toast.info('Page Changed (for demo)', {
                description: `from ${ options.prevPageNb } to ${ options.pageNb }`,
            })
        }

        // When Number of Items Per Page Changes
        const nbOfItemsPerPageChangedCb = (options: TransactionTcT['NbOfItemsPerPageChangedPayload']) =>
        {
            toast.info('Items Per Page Changed (for demo)', {
                description: `from ${ options.prevNbOfItemsPerPage } to ${ options.nbOfItemsPerPage }`,
            })
        }

        // When Items are Removed
        const itemsRemovedCb = (options: TransactionTcT['ItemsRemovedPayload']) =>
        {
            toast.info('Items Removed (for demo)', {
                description:
                    `[${ options.removedItems.slice(0, 3) }...]`,
            })
        }

        // When Items are Added
        const itemsAddedCb = (options: TransactionTcT['ItemsAddedPayload']) =>
        {
            toast.info('Items Added (for demo)', {
                description: `[${ options.addedItems.slice(0, 3) }...]`,
            })
        }

        // When Items are Updated
        const itemsUpdatedCb = (options: TransactionTcT['ItemsUpdatedPayload']) =>
        {
            toast.info('Items Updated (for demo)', {
                description: `[${ options.updatedItems.slice(0, 3) }...]`,
            })
        }

        // When Sorting Options Change
        const sortingOptionsChangedCb = (options: TransactionTcT['SortingOptionsChangedPayload']) =>
        {
            toast.info('Sorting Performed (for demo)', {
                description: `from [${ options.prevOptions.map(o => o.field + ' ' + o.order)
                    .join(', ') }] to [${ options.options.map(o => o.field + ' ' + o.order).join(', ') }]`,
            })
        }

        // When Searching Options Change
        const searchOptionsChangedCb = (options: TransactionTcT['SearchOptionsChangedPayload']) =>
        {
            toast.info('Searching Performed (for demo)', {
                description: `from [${ options.prevOptions.map(o => o.by).join(', ') }] to 
                [${ options.options.map(o => o.by).join(', ') }]`,
            })
        }

        // When Paginated Items Change
        const paginatedItemsChangedCb = (options: TransactionTcT['PaginatedItemsChangedPayload']) =>
        {
            toast.info('Items on the Page Changed (for demo)', {
                description: `from [${ options.prevPaginatedItems.slice(0, 2) }...]
                to [${ options.paginatedItems.slice(0, 2) }...]`,
            })
        }

        // There are more events that you can explore in the `TablorCore` class

        // Link Callbacks
        this.tablor.$pageNbChanged.subscribe(pageNbChangedCb)
        this.tablor.$nbOfItemsPerPageChanged.subscribe(nbOfItemsPerPageChangedCb)
        this.tablor.$itemsRemoved.subscribe(itemsRemovedCb)
        this.tablor.$itemsAdded.subscribe(itemsAddedCb)
        this.tablor.$itemsUpdated.subscribe(itemsUpdatedCb)
        this.tablor.$sortingOptionsChanged.subscribe(sortingOptionsChangedCb)
        this.tablor.$searchedOptionsChanged.subscribe(searchOptionsChangedCb)
        this.tablor.$paginatedItemsChanged.subscribe(paginatedItemsChangedCb)
    }
}
