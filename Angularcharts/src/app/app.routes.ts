import {Routes,RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LinechartComponent} from './linechart/linechart.component'
import {BarchartComponent} from './barchart/barchart.component'
import {PiechartComponent} from './piechart/piechart.component'

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
        path:'barchart',
        component:BarchartComponent
    },
    {
        path:'piechart',
        component:PiechartComponent
    },
    {
        path:'',
        redirectTo:'/welcome',
        pathMatch:'full'
    }

];

 export const routing = RouterModule.forRoot(routes);



