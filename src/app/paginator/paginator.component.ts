import { Component, Input } from '@angular/core'
import { TablorCore } from 'tablor-core-beta'
import { Transaction } from '../transactions_config'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-paginator',
    imports: [
        FormsModule,
    ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {

      @Input({ required: true }) tablor!: TablorCore<Transaction>

    currPageNb: number = 1

}
