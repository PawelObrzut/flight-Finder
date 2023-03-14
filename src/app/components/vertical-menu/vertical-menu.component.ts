import { Component } from '@angular/core';
import { faBars, faPlane, faBed, faCar, faTree, faGlobe, faShieldHeart, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faNoteSticky, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent {
  faBars = faBars;
  faCircleUser = faCircleUser;
  faPlane = faPlane;
  faBed = faBed;
  faCar = faCar;
  faTree = faTree;
  faGlobe = faGlobe;
  faShieldHeart = faShieldHeart;
  faMessage = faMessage;
  faNoteSticky = faNoteSticky;
  faCalendarCheck = faCalendarCheck
}
