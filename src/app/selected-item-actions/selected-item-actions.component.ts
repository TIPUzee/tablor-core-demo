// Angular
import { Component, Input } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
// Dataset
import { Transaction } from '../../dataset/transactions-type'
// The `TablorCore` Library
import { TablorCore } from 'tablor-core'
// Spartan UI
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu'
import {
    HlmMenuComponent,
    HlmMenuItemDirective,
    HlmMenuItemIconDirective,
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


@Component({
    selector: 'app-selected-item-actions',
    imports: [
        // Angular
        NgIcon,
        // Spartan UI
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
    ],
    templateUrl: './selected-item-actions.component.html',
})
export class SelectedItemActionsComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>
}
