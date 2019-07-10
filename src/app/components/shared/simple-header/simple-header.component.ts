import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrls: ['./simple-header.component.scss']
})
export class SimpleHeaderComponent {

  @Input() header: string;

}
