import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LevenshteinDistanceRequest } from '../../models/LevenshteinDistanceRequest.model';
import { API } from "../../services/api";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  request!: LevenshteinDistanceRequest;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: API,
  ) {
    this.request = new LevenshteinDistanceRequest();
  }

  ngOnInit() {
    if (!this.api.isAuthenticated()) 
      localStorage.setItem("authToken",environment.AUTHTOKEN)

      this.form = this.formBuilder.group({
      string1: [this.request.string1, Validators.required],
      string2: [this.request.string2, Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      localStorage.removeItem("matrix");
      this.api.Post("levenshteindistance/getlevenshteindistance", this.request)
        .subscribe((res) => {
          if (res != null) {
            localStorage.setItem("matrix", JSON.stringify(res));
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(["/levenshteinDistance"]);
            if (this.router && this.router.url === '/levenshteinDistance') {
              window.location.reload();
            } else {
              this.router.navigate(["/levenshteinDistance"]);
            }
          }
        }, (err) => {
        }
        );
    }
  }

  get validateControl() {
    return this.form.controls;
  }
}
