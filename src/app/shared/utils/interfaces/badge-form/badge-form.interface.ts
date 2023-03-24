import { FormControl } from "@angular/forms";

export interface IBadgeForm {
    color: FormControl<string | null>;
    name: FormControl<string | null>;
}