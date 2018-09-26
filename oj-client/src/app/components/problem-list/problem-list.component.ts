import { Component, OnInit, OnDestroy} from '@angular/core';
import {Problem} from '../../models/problem.model';
import {DataService} from '../../services/data.service';

import {Subscription} from 'rxjs/Subscription';


/* 外部变量 */
/*
const PROBLEMS: Problem[]  = [ 
  {
    "id" : 1,
    "name": "Two Sum",
    "desc": "Given an array of integers, find two numbers such that they add up to a specific target number.",
    "difficulty": "easy"
  }, 
  {
    "id" : 2,
    "name": "Three Sum",
    "desc": "Given an array of integers, find three numbers such that they add up to a specific target number.",
    "difficulty": "medium"
  }
]; 
*/

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})


export class ProblemListComponent implements OnInit, OnDestroy {

  /* 加入内部变量, 启动时会加载 */
  problems: Problem[]; 
  subscriptionProblems: Subscription;

  /* 通过constructor来injection！不用再constructor里调用； private是因为dataService不想提供给别的component用 */
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProblems();
  }

  ngOnDestroy() {
    this.subscriptionProblems.unsubscribe();
  }

  getProblems() {
    this.subscriptionProblems = this.dataService.getProblems()
      .subscribe(problems => this.problems = problems);
    // getProblems() return observable. need to subscribe it.
  }

}
