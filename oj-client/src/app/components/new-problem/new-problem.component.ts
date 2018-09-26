import { Component, OnInit } from '@angular/core';
import {Problem} from '../../models/problem.model';
import {DataService} from '../../services/data.service';

const DEFAULT_PROBLEM: Problem = Object.freeze({ /* freeze表示内容固定，而不能通过reference改变 */
  id: 0,
  name: '',
  desc: '',
  difficulty:'easy'
})

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {

  /* 用来track表的输入 */
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM); /* 深度copy object，因为我们希望DEFAULT_PROBLEM一直不变 */
  difficulties: string[] = ['easy', 'medium', 'hard','super'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  /* 把problem传入PROBLEM数组 */
  addProblem() {
    this.dataService.addProblem(this.newProblem); /* 这一步problem已经被加进去了 */
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);  /* 重新提交时，不会覆盖前一次提交的newProblem, 相当于refresh */
  }

}
