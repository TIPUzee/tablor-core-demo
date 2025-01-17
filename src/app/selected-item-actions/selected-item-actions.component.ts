// Angular
import { Component, Input } from '@angular/core'
import { DatePipe } from '@angular/common'
// Ng-Icons
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronDown } from '@ng-icons/lucide'
// Spartan UI Brain
import { BrnMenuImports } from '@spartan-ng/brain/menu'
import { BrnHoverCardImports } from '@spartan-ng/brain/hover-card'
// Spartan UI Helm
import { HlmMenuImports } from '@spartan-ng/ui-menu-helm'
import { HlmHoverCardImports } from '@spartan-ng/ui-hovercard-helm'
import { HlmButtonModule } from '@spartan-ng/ui-button-helm'
import { HlmIconModule } from '@spartan-ng/ui-icon-helm'
// Tablor Core
import { TablorCore } from 'tablor-core'
// Dataset
import { Transaction } from '../../dataset/transactions-type'


@Component({
    selector: 'app-selected-item-actions',
    imports: [
        // Angular
        DatePipe,
        // Ng-Icons
        NgIcon,
        // Spartan UI Brain
        BrnHoverCardImports,
        BrnMenuImports,
        // Spartan UI Helm
        HlmHoverCardImports,
        HlmMenuImports,
        HlmButtonModule,
        HlmIconModule,
    ],
    providers: [
        provideIcons({ lucideChevronDown }),
    ],
    templateUrl: './selected-item-actions.component.html',
})
export class SelectedItemActionsComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>
}
