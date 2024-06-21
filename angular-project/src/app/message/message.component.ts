import { Component, input } from '@angular/core';
import { message } from '../../Models/message';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @input() messages:message[]=[]

}
