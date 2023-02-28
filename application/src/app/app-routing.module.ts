import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup';
import { CharactersComponent } from './characters/characters.component';
import { ClassesComponent } from './classes/classes.component';
import { ItemsComponent } from './items/items.component';
import { SpellsComponent } from './spells/spells.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ViewUsersComponent } from './view-users/view-users.component'
import { AdminAddComponent } from './admin-add/admin-add.component'
import { AdminDeleteComponent } from './admin-delete/admin-delete.component'
import { AdminComponent } from './admin/admin.component';
import { CreateCharactersComponent } from './characters/create-characters/create-characters.component';

//This is what changes the routing on the navigation bar
//NOTE: path must match the routerLink indicated in app.component.html
const routes: Routes = [
  //If user not logged in, display login and create user tabs only
  { path: 'users/login', component: LoginComponent },
  { path: 'users/create', component: SignupComponent },
  
  //If user is logged in, display the following tabs
  { path: 'users/get', component: UsersComponent }, //Profile
  { path: 'classes', component: ClassesComponent }, //Classes
  { path: 'items', component: ItemsComponent }, //Items
  { path: 'spells', component: SpellsComponent }, //Spells

  //If user is admin, display following tabs
  { path: 'admin/get', component: AdminComponent },
  { path: 'admin/view-users', component: ViewUsersComponent },
  { path: 'admin/add', component: AdminAddComponent },
  { path: 'admin/delete', component: AdminDeleteComponent },

  //TODO - implement items-add and spells-add components and pages
  { path: 'items/create', component: AdminAddComponent },
  { path: 'spells/create', component: AdminAddComponent },

  //This is part of the profile page. It's where the Create A New Character button leads to
  { path: 'users/create-character', component: CreateCharactersComponent },

  //TODO: Leaving this connection here for now. users/characters will most likely 
  //be changed into users/characters/:id and integrated into users/myprofile.
  { path: 'users/characters', component: CharactersComponent },
];

export const appRoutingModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
