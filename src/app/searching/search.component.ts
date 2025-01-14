// Angular
import { Component, Input } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { FormsModule } from '@angular/forms'
// Dataset
import { Transaction } from '../../dataset/transactions-type'
// The `TablorCore` Library
import { TablorCore } from 'tablor-core'
// Spartan UI
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu'
import {
    HlmMenuComponent,
    HlmMenuItemDirective,
    HlmMenuItemIconDirective, HlmMenuItemImports,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmMenuShortcutComponent,
    HlmSubMenuComponent,
} from '@spartan-ng/ui-menu-helm'
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm'
import {
    BrnHoverCardComponent,
    BrnHoverCardContentDirective,
    BrnHoverCardTriggerDirective,
} from '@spartan-ng/brain/hover-card'
import {
    HlmHoverCardContentComponent,
} from '@spartan-ng/ui-hovercard-helm'
import { BrnSelectImports } from '@spartan-ng/brain/select'
import { HlmSelectImports } from '@spartan-ng/ui-select-helm'
import { NgScrollbarModule } from 'ngx-scrollbar'
import { HlmScrollAreaDirective } from '@spartan-ng/ui-scrollarea-helm'
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm'
import { HlmCheckboxImports } from '@spartan-ng/ui-checkbox-helm'
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm'
import { HlmInputDirective } from '@spartan-ng/ui-input-helm'


@Component({
    selector: 'app-searching',
    imports: [
        // Angular
        FormsModule,
        NgIcon,
        // Spartan UI
        NgScrollbarModule,
        BrnSelectImports,
        HlmSelectImports,
        HlmMenuComponent,
        BrnHoverCardComponent,
        HlmHoverCardContentComponent,
        BrnMenuTriggerDirective,
        HlmMenuItemIconDirective,
        HlmMenuItemDirective,
        HlmButtonDirective,
        HlmButtonDirective,
        HlmButtonDirective,
        BrnHoverCardContentDirective,
        BrnHoverCardTriggerDirective,
        HlmButtonDirective,
        HlmButtonDirective,
        HlmMenuItemIconDirective,
        HlmMenuItemImports,
        HlmButtonDirective,
        HlmScrollAreaDirective,
        HlmIconDirective,
        HlmButtonDirective,
        HlmIconDirective,
        HlmIconDirective,
        HlmIconDirective,
        HlmIconDirective,
        HlmMenuItemIconDirective,
        HlmMenuItemImports,
        HlmButtonDirective,
        HlmButtonDirective,
        HlmCheckboxImports,
        HlmLabelDirective,
        HlmLabelDirective,
        HlmInputDirective,
    ],
    templateUrl: './search.component.html',
})
export class SearchComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    stringFields: (keyof Transaction)[] = [
        'user', 'bank', 'description', 'amount', 'currency', 'transactionType',
        'status', 'merchant', 'receiptUrl', 'initiatedBy', 'notes',
    ]


    searchString($event: Event)
    {
        this.tablor.searchByStringQuery({
            query: ($event.target as HTMLInputElement).value,
            includeFields: this.stringFields,
            prevResults: {
                action: 'Clear',
                scope: 'All',
            },
        })
    }
}
