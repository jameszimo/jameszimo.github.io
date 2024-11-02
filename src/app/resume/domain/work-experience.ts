export class WorkExperience {
  company: string;
  city: string;
  startYear: string;
  endYear: string;
  title: string;
  description: string[];
  companyLink: string;

  constructor(experience: any) {
    this.company = experience.company;
    this.city = experience.city;
    this.startYear = experience.startYear;
    this.endYear = experience.endYear;
    this.title = experience.title;
    this.description = experience.description;
    this.companyLink = experience.companyLink;
  }
}
