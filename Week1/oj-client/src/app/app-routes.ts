/**
 * Created by huangxingjie on 2/28/17.
 */
import {RouterModule, Routes} from "@angular/router"
import { ProblemListComponent } from "../app/problem-list/problem-list.component"
import { ProblemDetailComponent  } from "../app/problem-detail/problem-detail.component"

const routes: Routes = [
  {
    path:"",
    redirectTo: "problems",
    pathMatch: "full"
  },
  {
    path:"problems",
    component: ProblemListComponent,

  },
  {
    path:"problems/:id",
    component: ProblemDetailComponent,

  },
  {
    path:"**",
    redirectTo: "problems"
  }
];

export const routing = RouterModule.forRoot(routes);
