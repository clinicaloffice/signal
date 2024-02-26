import {ChangeDetectionStrategy, ChangeDetectorRef, Component, computed} from '@angular/core';
import {FamilyService} from "../family.service";

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MomComponent {
  public changes = computed(() => {
    console.log(this.familyService.dirty);
    console.log('Baby Changed');
    this.cdr.detectChanges();
  })

  constructor(public cdr: ChangeDetectorRef, public familyService: FamilyService) {
  }

}
