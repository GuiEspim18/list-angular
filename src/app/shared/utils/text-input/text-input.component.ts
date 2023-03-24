import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class TextInputComponent {

  @Input() public type: string = "";

  @Input() public label: string = "";

  @Input() public value: any = "";

  @Input() public formControlExist: boolean = false;

  @Input() public controlName: string = "";

}
