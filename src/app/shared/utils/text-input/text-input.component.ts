import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent  {

  @Input() type: string = "";

  @Input() label: string = "";
  
  @Input() value: any = "";

  @Input() formControlExist: boolean = false;

  public readonly control: FormControl = new FormControl('');

  @Output() onKeyUp: EventEmitter<string> = new EventEmitter();


  public ngOnChanges(changes: SimpleChanges) {
    this.control.setValue(changes['value'].currentValue)
  }


  /* Emitting the control value */

  public keyUp(): void {
    this.onKeyUp.emit(this.control.value)
  }

}
