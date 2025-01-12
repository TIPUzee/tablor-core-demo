import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Dataset
import { DataType } from '../dataset-to-use'

// Library
import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-table',
    imports: [CommonModule, FormsModule],
    templateUrl: './table.component.html',
})
export class TableComponent
{
    @Input({ required: true }) tablor!: TablorCore<DataType>
}
