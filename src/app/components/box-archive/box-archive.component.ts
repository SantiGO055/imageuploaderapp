import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-archive',
  templateUrl: './box-archive.component.html',
  styleUrls: ['./box-archive.component.css']
})
export class BoxArchiveComponent implements OnInit {
  uploading = false
  constructor() { }

  ngOnInit(): void {
  }

  uploadImage(event: any) {

  }

}
