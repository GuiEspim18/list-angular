import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BadgeService } from 'src/app/shared/services/badge.service';
import { OpenDialogService } from 'src/app/shared/services/open-dialog.service';
import { IBadgeForm } from 'src/app/shared/utils/interfaces/badge-form/badge-form.interface';

@Component({
  selector: 'app-add-badge-dialog',
  templateUrl: './add-badge-dialog.component.html',
  styleUrls: ['./add-badge-dialog.component.scss']
})
export class AddBadgeDialogComponent {

  public readonly form: FormGroup<IBadgeForm> = new FormGroup<IBadgeForm> ({
    "color": new FormControl('#3f51b5', [Validators.required]),
    "name": new FormControl('', [Validators.required])
  })


  constructor(private readonly badgeService: BadgeService, private readonly openDialogService: OpenDialogService) { }


  /* Submit form */
  public submit(form: FormGroup): void {
    if (form.valid) {
      this.badgeService.set(form.value)
      this.openDialogService.dialogRef.close();
    }
  }

}
