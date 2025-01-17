// Angular
import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
// Ng-Icons
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronUp, lucideChevronDown } from '@ng-icons/lucide'
// Ngx-Scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar'
// Spartan UI Brain
import { BrnMenuImports } from '@spartan-ng/brain/menu'
// Spartan UI Helm
import { HlmMenuImports } from '@spartan-ng/ui-menu-helm'
import { HlmScrollAreaModule } from '@spartan-ng/ui-scrollarea-helm'
import { HlmButtonModule } from '@spartan-ng/ui-button-helm'
import { HlmCheckboxImports } from '@spartan-ng/ui-checkbox-helm'
import { HlmLabelModule } from '@spartan-ng/ui-label-helm'
import { HlmIconModule } from '@spartan-ng/ui-icon-helm'
// Tablor Core
import { TablorCore } from 'tablor-core'
// Dataset
import { Transaction } from '../../dataset/transactions-type'


@Component({
    selector: 'app-sorting',
    imports: [
        // Angular
        FormsModule,
        // Ng-Icons
        NgIcon,
        // Ngx-Scrollbar
        NgScrollbarModule,
        // Spartan UI Brain
        BrnMenuImports,
        // Spartan UI Helm
        HlmMenuImports,
        HlmScrollAreaModule,
        HlmButtonModule,
        HlmCheckboxImports,
        HlmLabelModule,
        HlmIconModule,
    ],
    providers: [
        provideIcons({
            lucideChevronUp,
            lucideChevronDown,
        }),
    ],
    templateUrl: './sorting.component.html',
})
export class SortingComponent
{
    @Input({ required: true }) tablor!: TablorCore<Transaction>

    multipleFieldsSorting: boolean = false


    clearSort()
    {
        this.tablor.clearSorting()
    }


    sort(field: keyof Transaction)
    {
        if (this.multipleFieldsSorting)
        {
            this.tablor.sort({
                field,
                order: 'Toggle',
            })
        }
        else
        {
            this.tablor.sort({
                field,
                order: 'Toggle',
                insertBehavior: {
                    insertAt: 0,
                },
                clear: {
                    target: 'AllNested',
                },
            })
        }
    }
}
