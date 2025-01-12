import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Dataset
import { DataType } from '../dataset-to-use'

// Library
import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-search',
    imports: [CommonModule, FormsModule],
    templateUrl: './search.component.html',
})
export class SearchComponent
{
    @Input({ required: true }) tablor!: TablorCore<DataType>
}
