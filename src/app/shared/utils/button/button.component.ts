import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public text: string = "";

  @Input() public type: string = "submit";

  @Input () public disabled: boolean = false;

}
