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
  isActive = false;

  constructor(private webcamera: WebcameraService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.init();
  }

  click(): void {
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

  private init(): void {
    this.webcamera.open(this.cameraType).catch(error => {
      this.initialize.emit(false);
    }).then(() => {
      this.initialize.emit(true);
      this.webcamera.cast(this.video.nativeElement).then(() => {
        this.isActive = true;
      });
    });
  }

  private run(): void {
    const image = this.webcamera.captureImage();
    this.capture.emit(image);
  }

}
