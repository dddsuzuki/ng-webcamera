import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter, AfterContentInit } from '@angular/core';
import { WebcameraService } from './webcamera.service';

@Component({
  selector: 'webcamera',
  templateUrl: './webcamera.component.html',
  styleUrls: ['./webcamera.component.scss'],
})
export class WebcameraComponent implements OnInit, AfterContentInit {

  @ViewChild('video', { static: false }) video: ElementRef;

  @Input() cameraType: 'in-camera' | 'out-camera' = 'in-camera';
  @Input() useTimer = false;
  @Input() timerCount = 3;

  @Output() capture: EventEmitter<string> = new EventEmitter();
  @Output() initialize: EventEmitter<boolean> = new EventEmitter();

  count = 0;

  constructor(private webcamera: WebcameraService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.init();
  }

  click() {
    if (this.useTimer) {
      this.count = this.timerCount;
      const timer = setInterval(() => {
        this.count--;

        if (this.count === 0) {
          clearInterval(timer);
          this.run();
        }
      }, 1000);
    } else {
      this.run();
    }
  }

  private init() {
    this.webcamera.open(this.cameraType).catch(error => {
      this.initialize.emit(false);
    }).then(() => {
      this.webcamera.cast(this.video.nativeElement);
      this.initialize.emit(true);
    });
  }

  private run() {
    const image = this.webcamera.captureImage();
    this.capture.emit(image);
  }

}
