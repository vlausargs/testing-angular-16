import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent {
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = window.innerWidth;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    let styleClass = '';
    // if (this.isSideNavCollapsed && this.screenWidth > 768) {
    //   styleClass = 'body-trimmed';
    // } else {
    styleClass = 'body-md-screen';
    // }

    // console.log(this.screenWidth);
    return styleClass;
  }
}
