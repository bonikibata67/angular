import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinningWheelService {
  private outcomes = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];

  spinWheel(): string {
    const randomIndex = Math.floor(Math.random() * this.outcomes.length);
    return this.outcomes[randomIndex];
  }
}

