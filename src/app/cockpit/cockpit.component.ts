import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  /* serverCreated and blueprintCreated  are event emitters  of generic type.
      Output() decorator is used to make the other components listen
  */
   @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();  // () are used to call the constructor of Event Emitter
   @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';
  constructor() {
  }

  ngOnInit() { }

  onAddServer() {
    // This is what we emit on add server
    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }
}
