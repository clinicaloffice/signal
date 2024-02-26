import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  public dirty =  signal(0);
  public numVal = 0;

  constructor() { }
}
