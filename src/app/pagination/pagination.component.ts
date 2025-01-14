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
import { BrnSelectImports } from '@spartan-ng/brain/select'
import { HlmSelectImports } from '@spartan-ng/ui-select-helm'


@Component({
    selector: 'app-pagination',
    imports: [
        // Angular
        FormsModule,
        NgIcon,
        // Spartan UI
        BrnSelectImports,
        HlmSelectImports,
        HlmMenuComponent,
        HlmHoverCardContentComponent,
        BrnMenuTriggerDirective,
        HlmMenuItemIconDirective,
        HlmMenuItemDirective,
        HlmButtonDirective,
        HlmButtonDirective,
        HlmButtonDirective,
    ],
    templateUrl: './pagination.component.html',
})
export class PaginationComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>
}
