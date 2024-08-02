import { Component,ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  parentName: string = '';
  parentName1: string = '';
  sendToChild() {
    // This method can be used to handle any additional logic if needed
    this.parentName1=this.parentName;
  }
  childName: string = '';

  
  receiveFromChild(newName: string) {
    this.childName = newName;
  }
  title="xyz";
}
