import { Component } from '@angular/core';
import { faTag, faRotateLeft, faLeaf, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  faTag = faTag;
  faRotateLeft = faRotateLeft;
  faLeaf = faLeaf;
  faTrophy = faTrophy;
}
