import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.css']
})
export class UploadingComponent implements OnInit {

  @Input() uploaded: boolean = false;
  imageUploadProgressSubscription: any
  stepsArray = []
  percentaje: number = 0;
  storageService: any;
  imageProgress: number | undefined;
  constructor() { }

  ngOnInit(): void {
    this.stepsArray = [];
    this.setImageUploadProgressSubscription()

    if (this.uploaded) {

      setTimeout(() => {
        this.percentaje += 25;
      }, 500);
    }
  }
  ngOnDestroy() {
    this.imageUploadProgressSubscription.unsubscribe()
  }
  setImageUploadProgressSubscription() {
    if (!this.imageUploadProgressSubscription) {
      this.imageUploadProgressSubscription = this.storageService.uploadProgressObservable()
        .subscribe((progress: number) => {
          this.imageProgress = progress / 100;
        })
    }



  }
}
