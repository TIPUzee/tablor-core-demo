import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Dataset
import { DataType } from '../dataset-to-use'

// Library
import { TablorCore } from 'tablor-core'


@Component({
    selector: 'app-event',
    imports: [CommonModule, FormsModule],
    templateUrl: './event.component.html',
})
export class EventComponent
{
    @Input({ required: true }) tablor!: TablorCore<DataType>
}
