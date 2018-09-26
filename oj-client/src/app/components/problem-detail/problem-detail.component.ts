import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'; /* 通过activated route 拿到当前生效的拿个路径 */
import {Problem} from '../../models/problem.model'; /* 类型 */
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})

export class ProblemDetailComponent implements OnInit {
  problem: Problem;

  /* 服务注入！ 需要用activateRoute那道当前路径，因为id再路径里面 */
  /* activeRoute是angular提供的服务 */
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    /* this.route 永远是当前路径， 通过angular framework的ActivatedRoute获得 */
    /* https://angular-2-training-book.rangle.io/handout/routing/routeparams.html */
    this.route.params.subscribe(params => { /* subscribed */
      // this.problem = this.dataService.getProblem(+params['id']); /* +"10" 从string变成一个数字  */
      // /* params 是从 route里来的, params都放在一个数组里，用变量名选取。 */

      this.dataService.getProblem(+params['id'])
        .then(problem => this.problem = problem);
        //getProblem return a promise.
        //problem is the returned data source. //this.problem is your local
        //problem.
    });
  }

}

/*
=> arrow 函数：
x => y
func(x) {
  return y
}
*/
