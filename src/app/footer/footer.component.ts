import { Component, Inject } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerData: string = '';

  constructor(@Inject(SharedService) private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.data$.subscribe((data) => {
      this.footerData = data;
      console.log(this.footerData);
    });
  }
}
