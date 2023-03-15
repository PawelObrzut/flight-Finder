import { Component } from '@angular/core';

@Component({
  selector: 'app-options-form',
  templateUrl: './options-form.component.html',
  styleUrls: ['./options-form.component.css']
})
export class OptionsFormComponent {
  roundTrip: string = 'false';
  adults: number = 1;
  children: number = 0;
}
