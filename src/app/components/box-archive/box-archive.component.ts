import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box-archive',
  templateUrl: './box-archive.component.html',
  styleUrls: ['./box-archive.component.css']
})
export class BoxArchiveComponent implements OnInit {


  @Output() newItemEvent = new EventEmitter<any>();

  @Input() url = '';
  @Input() uploaded = false;
  constructor() { }

  ngOnInit(): void {
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.url)
  }
  async uploadImage(event: any) {
    // console.log(event)
    this.newItemEvent.emit(event);
  }
  dragDrop(event: any) {
    // console.log(event)
    this.uploadImage(event);
  }
  buttonUpload(event: any) {
    this.uploadImage(event.target.files);
  }

}
