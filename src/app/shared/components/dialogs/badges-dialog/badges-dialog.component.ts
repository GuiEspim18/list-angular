import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BadgeService } from 'src/app/shared/services/badge.service';
import { OpenDialogService } from 'src/app/shared/services/open-dialog.service';
import { IBadgeForm } from 'src/app/shared/utils/interfaces/badge-form/badge-form.interface';
import { IBadge } from 'src/app/shared/utils/interfaces/badge/badge.interface';

@Component({
  selector: 'app-badges-dialog',
  templateUrl: './badges-dialog.component.html',
  styleUrls: ['./badges-dialog.component.scss']
})
export class BadgesDialogComponent implements OnInit {

  public readonly form: FormGroup<IBadgeForm> = new FormGroup<IBadgeForm> ({
    "color": new FormControl('#3f51b5', [Validators.required]),
    "name": new FormControl('', [Validators.required])
  });

  public badges: Array<IBadge> = new Array();


  constructor(private readonly badgeService: BadgeService, private readonly openDialogService: OpenDialogService) { }


  public ngOnInit(): void {
    this.populate();
  }


  /* Submit form */
  public submit(form: FormGroup): void {
    if (form.valid) {
      this.badgeService.set(form.value);
      this.openDialogService.dialogRef.close();
    }
  }


  /* Populate badges */
  private populate(): void {
    this.badgeService.currentBadgeInfo.subscribe((element: Array<IBadge>) => this.badges = element)
  }


  /* Delete badge */
  public delete(i: number): void {
    this.badges.splice(i, 1);
  }

}
