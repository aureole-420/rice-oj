import {Routes, RouterModule} from '@angular/router';
import {ProblemListComponent} from './components/problem-list/problem-list.component';
import { ProblemDetailComponent} from './components/problem-detail/problem-detail.component';

/*
为什么放在app下面？ ---- route 服务整个app，所以直接放在app里
跟restful api有点像，但前端没有crud （crud是对后端的）
*/
/* 内部是一个数组*/
const routes: Routes = [
    {
        path: '', /* 为什么需要空路径？比如 bittiger.io/ -- redirect to bittiger.io/home */
        redirectTo: 'problems', /*不specify具体路径，那就redirect到problems */
        pathMatch: 'full'   /* full 和 partial两种 */
    }, 
    {
        path: 'problems',
        component: ProblemListComponent  /* 把path指向某个component，可以多次redirect to,最终总得resolve到一个上面去 */
    },
    {
        path: 'problems/:id', /* 具体的problem，冒号表示后面事变量名，而不是literal path */
        /* https://angular-2-training-book.rangle.io/handout/routing/routeparams.html  */
        component: ProblemDetailComponent
    }, 
    {
        path: '**', /* 无效路径 */
        redirectTo: 'problems'
    }
];

export const routing = RouterModule.forRoot(routes); /* 上面是路径的定义，这里是实施，传到angualr里面去 */