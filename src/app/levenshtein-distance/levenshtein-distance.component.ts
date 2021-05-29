import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'src/services/api';

@Component({
  selector: 'app-levenshtein-distance',
  templateUrl: './levenshtein-distance.component.html',
  styleUrls: ['./levenshtein-distance.component.css']
})
export class LevenshteinDistanceComponent implements OnInit {
  data: any = null;
  matrix: any = [];
  firstString!: string;
  secondString!: string;
  distance!: string;

  constructor(private api: API, private router: Router) { }

  ngOnInit(): void {
    if (!this.api.isAuthenticated()) {
      this.data = null;
    } else {
      this.matrix = localStorage.getItem('matrix') || null;

      if (this.matrix != null && this.matrix != "") {
        this.matrix = JSON.parse(this.matrix)
        this.matrix.string1 = this.matrix.string1.replaceAll("*", " ");
        this.matrix.string2 = this.matrix.string2.replaceAll("*", " ");
        var rowHeader = this.matrix.string1.split("");
        var columnHeader = this.matrix.string2.split("");

        this.firstString = this.matrix.string1.replace(" ", "");
        this.secondString = this.matrix.string2.replace(" ", "");
        this.distance = this.matrix.result;

        var finalMatrix = this.TwoDimensional(this.matrix.matrix, this.secondString.length)
        this.data = {
          columnHeader: columnHeader,
          rowHeader: rowHeader,
          reportData: finalMatrix
        };
      }
    }
  }

  TwoDimensional(arr: any, size: number) {
    var res = [];
    for (var i = 0; i < arr.length; i = i + size)
      res.push(arr.slice(i, i + size));
    return res;
  }
}
