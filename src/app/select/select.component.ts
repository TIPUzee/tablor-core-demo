import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Dataset
import { DataType } from '../dataset-to-use'

// Library
import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-select',
    imports: [CommonModule, FormsModule],
    templateUrl: './select.component.html',
})
export class SelectComponent
{
    @Input({ required: true }) tablor!: TablorCore<DataType>
}
