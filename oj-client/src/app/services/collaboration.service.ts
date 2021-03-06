import { Injectable } from '@angular/core';

declare var io: any;   // io is alread imported in .angular.cli.json

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {
  collaborationSocket: any;


  constructor() { }

  init(editor: any, sessionId: string): void {
    // window.location.origin: the server location on the current page
    // for example, the current page on the browser is "localhost:3000/problems/1", 
    //the window.location.origin = "http/localhost:3000"

    // this.collaborationSocket = io(window.location.origin, {query: 'message=haha'});

    // this.collaborationSocket.on("message", (message) => {
    //   console.log('message received from the server: ' + message);
    this.collaborationSocket = io(window.location.origin, {query: 'sessionId=' + sessionId});

    // handle the changes sent from server.
    this.collaborationSocket.on("change", (delta: string) => {
      console.log('collaboratioon: editor cahnges by ' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      // apply the changes on editor
      editor.getSession().getDocument().applyDeltas([delta]);
    });
  }

  // emit event to make changes and inform server and other collaborators;
  change(delta: string): void {
    this.collaborationSocket.emit("change", delta);
  }

  restoreBuffer(): void {
    // user emit "restoreBuffer " event
    // let server to handle this event
    this.collaborationSocket.emit("restoreBuffer");
  }
}
