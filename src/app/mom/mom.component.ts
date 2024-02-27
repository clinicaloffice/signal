import {ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect} from '@angular/core';
import {FamilyService} from "../family.service";

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MomComponent {

  constructor(public cdr: ChangeDetectorRef, public familyService: FamilyService) {
    effect(() => {
      console.log('In Mom effect');

      this.familyService.dirty();

      this.cdr.detectChanges();
    });

  }

}
