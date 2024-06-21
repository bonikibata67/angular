import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages = [
    "Hi, how are you doing?",
    "I'm fine, thank you!",
    "What have you been up to?",
    "Hello, nice to meet you!",   
  ];

  getRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    return this.messages[randomIndex];
  }
}

