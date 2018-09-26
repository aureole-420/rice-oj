// 收获：
// 1. Router.navigateByUrl做跳转
// 2. handle undefined: typeof variable == 'undefined'
// 3. in function body, call attribute with this.attrName;

import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {Problem} from '../../models/problem.model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  nameOfProblemToSearch : string = "Search by problem name";
  problemId: number = -1;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  searchProblem() {

    console.log("search problem done! ");
    console.log(this.nameOfProblemToSearch);
    
    var temp = this.dataService.searchProblemByName(this.nameOfProblemToSearch);
    console.log(temp);
    console.log(typeof temp == 'undefined');

    if (typeof temp == 'undefined') {
      console.log("problem [" + this.nameOfProblemToSearch + "] does not exists!");
      return;
    }

    this.problemId = this.dataService.searchProblemByName(this.nameOfProblemToSearch).id;
    console.log("problem [" + this.nameOfProblemToSearch + "] is indexed " + this.problemId);

    if (this.problemId !== -1) {
        this.router.navigateByUrl("/problems/" + this.problemId);
    }

  }



}
