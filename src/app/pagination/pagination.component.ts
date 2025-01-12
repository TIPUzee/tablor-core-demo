import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Dataset
import { DataType } from '../dataset-to-use'

// Library
import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-pagination',
    imports: [CommonModule, FormsModule],
    templateUrl: './pagination.component.html',
})
export class PaginationComponent
{
    @Input({ required: true }) tablor!: TablorCore<DataType>
}
