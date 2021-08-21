import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Button</h1>
    
    <toggle-button (changed)="checked=$any($event)">
    </toggle-button>
    
  `,
  styles: [ `
    h1 {
      color: #DB5B33;
      font-weight: 300;
      text-align: center;
    }
    
    toggle-button {
      margin: 0 auto;
    } 
  `]
})
export class AppComponent  {
  checked!: boolean;
}
