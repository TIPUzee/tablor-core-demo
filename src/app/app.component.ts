import { Component } from '@angular/core'

// Dataset
import { DataType, dataFields, dataset } from './dataset-to-use'

// Library
import { TablorCore } from 'tablor-core'

// Components
import { TableComponent } from './table/table.component'
import { PaginationComponent } from './pagination/pagination.component'
import { SearchComponent } from './search/search.component'
import { SelectComponent } from './select/select.component'
import { SortComponent } from './sort/sort.component'
import { EventComponent } from './event/event.component'


@Component({
    selector: 'app-root',
    imports: [
        TableComponent,
        PaginationComponent,
        SearchComponent,
        SelectComponent,
        SortComponent,
        EventComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent
{
    tablor = new TablorCore<DataType>()


    constructor()
    {
        this.tablor.initializeFields(dataFields)
        this.tablor.initializeItems(dataset)
    }
}
