import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComponentAndDataBindingDeepDive';
  servers: any[] = [];
  newServerName: string = '';
  newServerContent: string = '';

  onAddServer(){
    this.servers.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onAddBlueprint(){
    this.servers.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    })
  }


}
