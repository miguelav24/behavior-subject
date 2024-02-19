import { Component, Inject } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(@Inject(SharedService) private sharedService: SharedService) {}

  sendDataToFooter() {
    const data = 'Informacion';
    this.sharedService.setData(data);
  }
}
