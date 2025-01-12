import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Dataset
import { DataType } from '../dataset-to-use'

// Library
import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-sort',
    imports: [CommonModule, FormsModule],
    templateUrl: './sort.component.html',
})
export class SortComponent
{
    @Input({ required: true }) tablor!: TablorCore<DataType>
}
