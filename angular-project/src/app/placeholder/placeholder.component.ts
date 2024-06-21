import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaceholderPipe } from '../pipes/placeholder.pipe';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, FormsModule, PlaceholderPipe],  
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  userInput: string = '';
  minLength: number = 5;
}

