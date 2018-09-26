import { Component, OnInit } from '@angular/core';
import {CollaborationService} from '../../services/collaboration.service';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../../services/data.service';

declare var ace: any; 

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})


export class EditorComponent implements OnInit {
  sessionId: string;

  editor: any;
  languages: string[] = ['Java', 'Python', 'C++'];
  language: string = 'Java';
  output: string = '';

  

  defaultContent = {
    "Java": `public class Example {
      public static void main(String[] args) {
        // Type your Java code here.
      }
    }`, // use `` to write multi-line text
    "Python": `class Solution:
    def example():
        # write your python code here.`,
    
     "C++" : `
     int main() {
       return 0;
     }
    `
  }
  
  // inject CollaborationService
  constructor(private collaboration: CollaborationService, 
      private route: ActivatedRoute, 
      private dataService: DataService) { }

  ngOnInit() {
    // use problemid as session id
    // since we subscribe the changes, every time the params changes,
    // session id will be updated and the editor will be initilized.
    this.route.params
    .subscribe(params => {
      this.sessionId = params['id'];
      this.initEditor();
    });
    this.collaboration.restoreBuffer();
    // // "editor" is the id in html
    // this.editor = ace.edit("editor");
    // this.editor.setTheme("ace/theme/eclipse");
    // // this.editor.getSession().setMode("ace/mode/java");
    // // // set the java
    // // this.editor.setValue(this.defaultContent["Java"]);
    // this.resetEditor();

    // this.collaboration.init();


  }

  initEditor(): void {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.resetEditor();
    document.getElementsByTagName('textarea')[0].focus();

    // setup collaboration socket
    this.collaboration.init(this.editor, this.sessionId);
    this.editor.lastAppliedChange = null;

    // register change call back
    this.editor.on("change", (e) => {
      console.log('eidtor change:' + JSON.stringify(e));
      // check if the change is same as last change
      // if they are the same, skip this change
      if (this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    })
  }

  resetEditor() : void {
    this.editor.setValue(this.defaultContent[this.language]);
    this.editor.getSession().setMode(
      "ace/mode/" + this.language.toLowerCase() 
    );
  }

  setLanguage(language: string) : void {
    this.language = language;
    this.resetEditor(); // when language changes, need to reset the editor
  }

  submit(): void {
    let user_code = this.editor.getValue();
    console.log(user_code);
    // create object that contains user's code and language
    // send this to server
    const data = {
      user_code: user_code,
      lang: this.language.toLocaleLowerCase()
    }

    console.log("<editor.component.submit()> sending data to data service");
    console.log(data);

    // build and run return a promise
    this.dataService.buildAndRun(data)
      .then((res) => {
        // this.output = res.text;
        console.log("<editor.component.submit()> receive data from dataService.buildAndRun()" + res);
        this.output = res;
        console.log("<editor.component.submit()> receive data from dataService.buildAndRun()" + this.output);
      });
  }

}
