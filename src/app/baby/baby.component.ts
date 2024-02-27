import {ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect} from '@angular/core';
import {FamilyService} from "../family.service";

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BabyComponent {

  constructor(public cdr: ChangeDetectorRef, public familyService: FamilyService) {
    effect(() => {
      console.log('In baby effect');

      this.familyService.dirty();

      this.cdr.detectChanges();
    });

  }

}
