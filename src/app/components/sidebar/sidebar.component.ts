import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { LoginComponent } from '../../login/login.component';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/admin/skills', title: 'Skills',  icon:'education_atom', class: '' },
    { path: '/admin/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/admin/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    { path: '/admin/profile-expert', title: 'expert Profile',  icon:'users_single-02', class: '' },
    { path: '/admin/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/admin/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    { path: '/admin/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    { path: '/admin/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

export const ROUTESX: RouteInfo[] = [
  { path: '/expert/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/expert/skills', title: 'Skills',  icon:'education_atom', class: '' },
  { path: '/expert/maps', title: 'Maps',  icon:'location_map-big', class: '' },
  { path: '/expert/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
  { path: '/expert/profile-expert', title: 'expert Profile',  icon:'users_single-02', class: '' },
  { path: '//experttable-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
  { path: '/expert/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
  { path: '/expert/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  hamma: User;


  constructor() { }

 async ngOnInit() {

 await this.getuser();
 this.sidebardata();

//await this.sidebardata();


}
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

async getuser(){
  this.hamma = await JSON.parse(localStorage.getItem('curentuser'));
   console.log(this.hamma.username);
}

sidebardata(){
  if(this.hamma.role.name =="Expert"){
    this.menuItems = ROUTESX.filter(menuItem => menuItem);
}
else{
  this.menuItems = ROUTES.filter(menuItem => menuItem);

}
}


}
