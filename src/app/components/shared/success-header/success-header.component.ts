import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-header',
  templateUrl: './success-header.component.html',
  styleUrls: ['./success-header.component.scss']
})
export class SuccessHeaderComponent {

  @Input() header: string;

}
