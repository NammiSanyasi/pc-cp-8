import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() name: string = '';

  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  childName: string = '';

  sendToParent() {
    this.nameChange.emit(this.childName);
  }
  
}
