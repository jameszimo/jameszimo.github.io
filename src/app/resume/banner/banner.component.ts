import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BreakpointNames, ViewportService} from '../../service/viewport.service';

@Component({
    selector: 'banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    standalone: false
})
export class BannerComponent implements OnInit {
  viewportSizeClass: string = "";
  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() city: string = "";
  @Input() phone: string = "";
  @Input() email: string = "";
  @Input() jobTitle: string = "";

  constructor(private viewportService: ViewportService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.viewportService.getViewportClass().subscribe(result => {
      this.viewportSizeClass = result;
      this.cdr.markForCheck();
    });
  }

  get isDisplayed(): boolean {
    return this.viewportSizeClass !== BreakpointNames.XSmall;
  }
}
