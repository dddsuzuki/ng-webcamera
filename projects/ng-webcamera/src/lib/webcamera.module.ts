import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcameraService } from './webcamera.service';
import { WebcameraComponent } from './webcamera.component';
import { CameraIconComponent } from './components/camera-icon/camera-icon.component';

@NgModule({
  declarations: [
    WebcameraComponent,
    CameraIconComponent,
  ],
  providers: [
    WebcameraService
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WebcameraComponent
  ]
})
export class WebcameraModule { }
