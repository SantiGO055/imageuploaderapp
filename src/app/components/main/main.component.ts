import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service'
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser'
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  _imageUrl: SafeResourceUrl | undefined
  uploaded = false

  upload: String = ''
  url: string = ''
  constructor(private readonly storage: FirebaseService, private readonly dom: DomSanitizer) { }

  set imageUrl(url: string | null) {
    if (url) {
      this.downloadImage(url)
    }
  }

  ngOnInit(): void {
    this.uploaded = false
  }

  async downloadImage(fileName: string) {
    var retorno
    try {
      retorno = this.storage.referenciaCloudStorage(fileName).getDownloadURL()

    } catch (error) {
      if (error instanceof Error) {
        // console.error('Error downloading image: ', error.message)
      }
    }
    finally {
      return retorno
    }

  }

  async uploadImage(files: any) {

    this.uploaded = true
    try {
      // console.log(files)

      if (!files || files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = files[0]
      const fileName = files[0].name
      const fileExt = file.name.split('.').pop()
      const filePath = `${Math.random()}.${fileExt}`


      this.storage.tareaCloudStorage(fileName, file).then(() => {
        this.url = this.storage.url;
      });
      // this.url = response
      //this.downloadImage(fileName).then(a => a?.subscribe(response => response != null ? this.url = response : null))





    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {



    }
  }

}
