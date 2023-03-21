import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IHomeForm } from 'src/app/shared/utils/interfaces/home-form/home-form.interface';
import { ITable } from 'src/app/shared/utils/interfaces/table/table.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public readonly form: FormGroup<IHomeForm> = new FormGroup({
    "add": new FormControl('', [Validators.required])
  });

  public arr: Array<ITable> = new Array();


  /* Getting the keyDownEvent from input */

  public gettingEvent(event: string): void {
    const value: string = event;
    if (value.length > 0) {
      this.form.get("add")?.setValue(value);
    }
  }


  /* Submit form */

  public submit(form: FormGroup): void {
    if (form.valid) {
      const name: string = form.value.add
      const index: number = this.arr.length + 1
      this.form.get("add")?.setValue('');
      console.log(this.form.get("add")?.value)
      this.arr.push({name: name, index: index});
    }
  }

}
