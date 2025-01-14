// Angular modules
import { Component } from '@angular/core'
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
        // App
        SelectedItemActionsComponent,
        PaginationComponent,
        SortingComponent,
        SearchComponent,
    ],
    providers: [
        provideIcons({
            lucideChevronDown,
            lucideChevronUp,
        }),
    ],
    templateUrl: './app.component.html',
})
export class AppComponent
{
    tablor: TablorCore<Transaction>


    constructor()
    {
        this.tablor = new TablorCore()
        this.tablor.initializeFields(transactionFields)
        this.tablor.initializeItems(transactionsDataset)

        this.tablor.setNbOfItemsPerPage(20)
    }
}
