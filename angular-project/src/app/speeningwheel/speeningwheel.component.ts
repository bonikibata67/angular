import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinningWheelService } from '../speeningwheel.service';



@Component({
  selector: 'app-spinning-wheel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Speeningwheel.component.html',
  styleUrl: './Speeningwheel.component.css'
})
export class SpeeningwheelComponent {
  result: string | null = null;
  spinMessage: string | null = null;

  constructor(private spinningWheelService: SpinningWheelService) {}

  spin() {
    this.result = this.spinningWheelService.spinWheel();
    if (this.result === 'Try Again') {
      this.spinMessage = 'Try again! You get an extra spin.';
    } else {
      this.spinMessage = `Congratulations! You won: ${this.result}`;
    }
  }
}

