import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'wechat-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
})
export class AccordionComponent {

  @ViewChild('item') accordion;

  toggle() {
    this.accordion.toggle();
  }
}
