import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About.Component';
import { ContactComponent } from './Contact.component';
import { HeaderHomeComponent } from './HeaderHome.component';
import { HomePageComponent } from './HomePage.component';
import { HomeTemPlateComponent } from './HomeTemplate.component';
import { LoginComponent } from './Login.component';
import { RegisterComponent } from './Register.component';


//Dinh nghia router

const HomeRoute: Routes=[
    {path:'', component:HomeTemPlateComponent,children:[
        {path:'',component:HomePageComponent},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'about',component:AboutComponent},
        {path:'contact',component:ContactComponent},
    ]}

]

@NgModule({
    declarations: [HomePageComponent,
    AboutComponent, RegisterComponent,
    ContactComponent,LoginComponent,
    HomeTemPlateComponent, HeaderHomeComponent,
    ],
    imports: [RouterModule.forChild(HomeRoute),CommonModule],
    exports: [],
    
    providers: [],
})
export class HomeModule { }
