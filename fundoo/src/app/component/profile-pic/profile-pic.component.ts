import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})

export class ProfilePicComponent implements OnInit 
{
  route: any;
  router: any;
  constructor() {}
  ngOnInit() {}

  flag = true;

  Close()
  {
    this.router.navigate(['navbar'], { relativeTo: this.route });
    console.log("close profile picture component");
  }

    imageChangedEvent: any = '';
    croppedImage: any = '';
    
    fileChangeEvent(event: any): void 
    {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) 
    {
        this.croppedImage = event.base64;
    }

    imageLoaded() 
    {
        // show cropper
        console.log("image loaded");
    }

    cropperReady() 
    {
        // cropper ready
        console.log("image cropped");
    }

    loadImageFailed() 
    {
        // show message
        console.log("image load fail");
    }
}
