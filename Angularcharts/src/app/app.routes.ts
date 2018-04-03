import {Routes,RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LinechartComponent} from './linechart/linechart.component'

const routes:Routes = [

    {
        path:'welcome',
        component:WelcomeComponent
    },
    {
        path:'linechart',
        component:LinechartComponent
    },
    {
        path:'',
        redirectTo:'/welcome',
        pathMatch:'full'
    }

];

 export const routing = RouterModule.forRoot(routes);



