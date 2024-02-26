import {ChangeDetectionStrategy, ChangeDetectorRef, Component, computed} from '@angular/core';
import {FamilyService} from "../family.service";

@Component({
  selector: 'app-first-born',
  templateUrl: './first-born.component.html',
  styleUrls: ['./first-born.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstBornComponent {
  public changes = computed(() => {
    console.log(this.familyService.dirty);
    console.log('Baby Changed');
    this.cdr.detectChanges();
  })

  constructor(public cdr: ChangeDetectorRef, public familyService: FamilyService) {
  }

}
