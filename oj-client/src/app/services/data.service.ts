import { Injectable } from '@angular/core';
import {Problem} from '../models/problem.model';
// import {PROBLEMS} from "../mock-problems";

import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';



/* service 可以看成一个全局变量 */
@Injectable({
  providedIn: 'root'
}) /* angular 6 中的简化，injectable表示别的地方可以被用， providedIn:'root' 表示提供给所有的component，
如果只想提供给某个component，就把root换成想要用的component就可以了 */
export class DataService {
  // problems: Problem[] = PROBLEMS;

  // BehavivorSubject: when subscribe, we can get the value that emitted last time.
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  
  constructor(private httpClient:HttpClient) { }

  getProblems(): Observable<Problem[]> {
    this.httpClient.get('api/v1/problems') // Problem[]
      .toPromise()
      .then((res:any) => {
        this._problemSource.next(res); // .next(): next data. observable/subject 发布数据
      })
      .catch(this.handleError);

      return this._problemSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.httpClient.get(`api/v1/problems/${id}`)
    .toPromise() 
    .then((res:any) => res) // use then, catch to consume the promise, res 
    .catch(this.handleError); // use error handler (a function) to handle error
  }

  addProblem(problem: Problem) {
    const options = { headers: new HttpHeaders({
      'Content-Type':'application/json'
    })};

    return this.httpClient.post('api/v1/problems', problem, options)
      .toPromise()
      .then((res: any) => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }



  private handleError(err: any) : Promise<any> {
    console.error('an error occured', err);
    return Promise.reject(err.body || err);
  }


  // getProblems() : Problem[] {
  //   return this.problems;
  // }

  // getProblem(id: number) : Problem { /* number 在ts里跟基本类型差不多 */
  //   return this.problems.find( (problem) => problem.id === id);
  //   /* arrow function (param) => {expression}   --- equivalent to --- => {return expression;}*/
  //   /* (problem) => problem.id === id  ---等同于---  一个返回boolean的函数， === 不止判断值，还判断类型相同*/
  // }

  // addProblem(problem: Problem) {
  //   problem.id = this.problems.length + 1;
  //   this.problems.push(problem);
  // }

  searchProblemByName(problemName: String ) : Problem {
    return null;
    // return this.problems.find((problem) => problem.name === problemName);
  }

  buildAndRun(data): Promise<any> {
    // define the content-type in http request header
    //content-type declares the body type when you issue a POST request
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    
    return this.httpClient.post('api/v1/build_and_run', data, options)
      .toPromise() // convert observable to promise
      .then(res => { // 返回的res 应该是个
        console.log("<data.service.buildAndRun()> result received for buildAndRun request");
        console.log(res);
        return res;
      })
      .catch(this.handleError);
  }
}
