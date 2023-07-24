import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-create-edit',
  templateUrl: './form-create-edit.component.html',
  styleUrls: ['./form-create-edit.component.scss'],
})
export class FormCreateEditComponent implements OnInit {
  activeLinkTab!: string | undefined;

  links = ['General', 'Team', 'Tasks'];

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.activeLinkTab = this.route.snapshot.firstChild?.url[0].path;
  }

  backHomePage() {
    this.router.navigate(['app/main/projects']);
  }
}
