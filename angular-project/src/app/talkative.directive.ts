
import { Directive, ElementRef, HostListener } from '@angular/core';
import { MessageService } from './message.service';

@Directive({
  selector: '[appTalkative]'
})
export class TalkativeDirective {
  constructor(private el: ElementRef, private messageService: MessageService) {}

  @HostListener('click') onClick() {
    const randomMessage = this.messageService.getRandomMessage();
    this.el.nativeElement.innerText = randomMessage;
  }
}
