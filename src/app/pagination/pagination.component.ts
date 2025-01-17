// Angular
import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
// Ng-Icons
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronDown } from '@ng-icons/lucide'
// Spartan UI Brain
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu'
import { BrnSelectImports } from '@spartan-ng/brain/select'
// Spartan UI Helm
import { HlmMenuImports } from '@spartan-ng/ui-menu-helm'
import { HlmButtonModule } from '@spartan-ng/ui-button-helm'
import { HlmSelectImports } from '@spartan-ng/ui-select-helm'
// Tablor Core
import { TablorCore } from 'tablor-core'
// Dataset
import { Transaction } from '../../dataset/transactions-type'


@Component({
    selector: 'app-pagination',
    imports: [
        // Angular
        FormsModule,
        // Ng-Icons
        NgIcon,
        // Spartan UI Brain
        BrnSelectImports,
        BrnMenuTriggerDirective,
        // Spartan UI Helm
        HlmSelectImports,
        HlmMenuImports,
        HlmButtonModule,
    ],
    providers: [
        provideIcons({ lucideChevronDown }),
    ],
    templateUrl: './pagination.component.html',
})
export class PaginationComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>
}
