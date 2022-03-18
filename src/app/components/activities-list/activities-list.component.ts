import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activities } from 'src/app/models/activities.model';
import { ActivitiesService } from 'src/app/services/activities.service'; 

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  listActivities: Activities[] = [];
  constructor(private ActivitiesService: ActivitiesService, public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this.ActivitiesService.getAll().subscribe(data => {
      this.listActivities = data
    });
  }

  deleteActivities(data: Activities) {
    this.ActivitiesService.delete(data).subscribe(data => {
    });
    this.ngOnInit();
  }

}
