import { Component, Input } from '@angular/core';

export enum HeaderType {
  simple = 'simpleHeader',
  success = 'successHeader'
}

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent {

  @Input() header: string;
  @Input() headerType: HeaderType;

  readonly headerTypes = HeaderType;
}
