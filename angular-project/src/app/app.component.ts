import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { message } from '../Models/message';
import { TalkativeDirective } from './talkative.directive';
import {SpeeningwheelComponent} from './speeningwheel/speeningwheel.component';
import { PlaceholderPipe } from './pipes/placeholder.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MessageComponent, CommonModule,FormsModule,SpeeningwheelComponent,PlaceholderPipe,TalkativeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // directive:[TalkativeDirective]
  
})
export class AppComponent {
  title = 'angular-project';

  message:message[]=[
    {
      id:1,
      name:"Jack steel",
      description:"Hi how are you doing"

    },
    {
      id:2,
      name:"John snow",
      description:"i am fine"

    },
    {
      id:3,
      name:"james stone",
      description:"hi guys what have you been up to"

    },

  ]

  addMessage(){
    this.message.push({
      id:this.message.length+1,
      name:"New User",
      description:"New message"
    })
  }
 

}





