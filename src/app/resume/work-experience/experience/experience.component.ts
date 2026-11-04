import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ExperienceComponent implements OnInit {

  @Input() index: number = 0;
  @Input() company: string = "";
  @Input() city: string = "";
  @Input() dateRange: string = "";
  @Input() startYear: string = "";
  @Input() endYear: string = "";
  @Input() title: string = "";
  @Input() description: string[] = [];
  @Input() companyLink: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  getJobDescription(): string[] {
    return this.description;
  }
}
