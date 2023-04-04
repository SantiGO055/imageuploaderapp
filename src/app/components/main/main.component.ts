import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service'
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser'
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  _imageUrl: SafeResourceUrl | undefined
  uploading = false
  upload: String = ''

  constructor(private readonly storage: FirebaseService, private readonly dom: DomSanitizer) { }

  set imageUrl(url: string | null) {
    if (url) {
      this.downloadImage(url)
    }
  }

  ngOnInit(): void {

  }

  async downloadImage(path: string) {
    try {
      // const { data } = await this.supabase.downLoadImage(path)
      // if (data instanceof Blob) {
      //   this._imageUrl = this.dom.bypassSecurityTrustResourceUrl(URL.createObjectURL(data))
      // }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error downloading image: ', error.message)
      }
    }
  }

  async uploadImage(event: any) {
    try {
      this.uploading = true
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileName = event.target.files[0].name
      const fileExt = file.name.split('.').pop()
      const filePath = `${Math.random()}.${fileExt}`

      console.log(file)
      console.log(fileExt)
      console.log(filePath)

      console.log(this.storage.tareaCloudStorage(fileName, file).percentageChanges().subscribe(val => console.log(val)))
      // await this.supabase.uploadImage(filePath, file)
      this.upload = filePath
      console.log(this.storage.referenciaCloudStorage(fileName).getDownloadURL().subscribe(a => console.log(a)))
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.uploading = false
    }
  }

}
