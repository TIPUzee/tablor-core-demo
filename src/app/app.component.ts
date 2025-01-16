// Angular modules
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
// Ng Icons
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide'
// Spartan UI
import { BrnSelectImports } from '@spartan-ng/brain/select'
import { HlmSelectImports } from '@spartan-ng/ui-select-helm'
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm'
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu'
import {
    HlmMenuComponent,
    HlmMenuGroupComponent,
    HlmMenuItemDirective,
    HlmMenuItemIconDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmMenuShortcutComponent,
    HlmSubMenuComponent,
} from '@spartan-ng/ui-menu-helm'
import { NgScrollbarModule } from 'ngx-scrollbar'
import { HlmScrollAreaDirective } from '@spartan-ng/ui-scrollarea-helm'
import { HlmCheckboxCheckIconComponent, HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm'
import { NgxSonnerToaster, toast, ToasterProps } from 'ngx-sonner'
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm'
// Dataset
import { Transaction, transactionFields } from '../dataset/transactions-type'
import { transactionsDataset } from '../dataset/transactions-dataset'
// The `TablorCore` Library
import { TablorCore } from 'tablor-core'
// App Components
import { DatePipe, NgClass } from '@angular/common'
import { SelectedItemActionsComponent } from './selected-item-actions/selected-item-actions.component'
import { PaginationComponent } from './pagination/pagination.component'
import { SortingComponent } from './sorting/sorting.component'
import { SearchComponent } from './searching/search.component'


@Component({
    selector: 'app-root',
    imports: [
        // Angular
        FormsModule,
        NgIcon,
        NgClass,
        DatePipe,
        // Spartan UI
        NgScrollbarModule,
        BrnSelectImports,
        HlmSelectImports,
        HlmMenuComponent,
        HlmMenuGroupComponent,
        HlmMenuItemSubIndicatorComponent,
        HlmMenuLabelComponent,
        HlmMenuSeparatorComponent,
        HlmMenuShortcutComponent,
        HlmSubMenuComponent,
        HlmCheckboxCheckIconComponent,
        HlmCheckboxComponent,
        HlmButtonDirective,
        BrnMenuTriggerDirective,
        HlmMenuItemIconDirective,
        HlmMenuItemDirective,
        HlmScrollAreaDirective,
        HlmToasterComponent,
        // App
        SelectedItemActionsComponent,
        PaginationComponent,
        SortingComponent,
        SearchComponent,
        NgxSonnerToaster,
    ],
    providers: [
        provideIcons({
            lucideChevronDown,
            lucideChevronUp,
        }),
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
        this.tablor.initializeItems(transactionsDataset)
        // this.tablor.addItems(transactionsDataset) // Same as above

        this.tablor.setNbOfItemsPerPage(20) // Default was 10
    }


    linkEvents()
    {
        this.tablor.$pageNbChanged.subscribe((options) =>
        {
            toast.info('Page Changed (for demo)', {
                description: `from ${ options.prevPageNb } to ${ options.pageNb }`,
            })
        })

        this.tablor.$nbOfItemsPerPageChanged.subscribe((options) =>
        {
            toast.info('Items Per Page Changed (for demo)', {
                description: `from ${ options.prevNbOfItemsPerPage } to ${ options.nbOfItemsPerPage }`,
            })
        })

        this.tablor.$itemsRemoved.subscribe((options) =>
        {
            toast.info('Items Removed (for demo)', {
                description:
                    `[${ options.removedItems.slice(0, 3) }...]`,
            })
        })

        this.tablor.$itemsAdded.subscribe((options) =>
        {
            toast.info('Items Added (for demo)', {
                description: `[${ options.addedItems.slice(0, 3) }...]`,
            })
        })

        this.tablor.$itemsUpdated.subscribe((options) =>
        {
            toast.info('Items Updated (for demo)', {
                description: `[${ options.updatedItems.slice(0, 3) }...]`,
            })
        })

        this.tablor.$sortingOptionsChanged.subscribe((options) =>
        {
            toast.info('Sorting Performed (for demo)', {
                description: `from [${ options.prevOptions.map(o => o.field + ' ' + o.order)
                    .join(', ') }] to [${ options.options.map(o => o.field + ' ' + o.order).join(', ') }]`,
            })
        })

        this.tablor.$searchedOptionsChanged.subscribe((options) =>
        {
            toast.info('Searching Performed (for demo)', {
                description: `from [${ options.prevOptions.map(o => o.by).join(', ') }] to 
                [${ options.options.map(o => o.by).join(', ') }]`,
            })
        })

        this.tablor.$paginatedItemsChanged.subscribe((options) =>
        {
            toast.info('Items on the Page Changed (for demo)', {
                description: `from [${ options.prevPaginatedItems.slice(0, 2) }...]
                to [${ options.paginatedItems.slice(0, 2) }...]`,
            })
        })
    }
}
