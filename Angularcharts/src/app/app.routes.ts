import {Routes,RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

const routes:Routes = [

    {
        path:'welcome',
        component:WelcomeComponent
    },
    {
        path:'',
        redirectTo:'/welcome',
        pathMatch:'full'
    }

];

 export const routing = RouterModule.forRoot(routes);


