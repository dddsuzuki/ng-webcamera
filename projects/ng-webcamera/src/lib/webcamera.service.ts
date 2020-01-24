import { Injectable } from '@angular/core';

@Injectable()
export class WebcameraService {

  private stream: MediaStream;
  private canvas: HTMLCanvasElement;
  private video: HTMLVideoElement;

  constructor() { }

  async open(cameraType: string) {
    this.close();

    const options: any = {
      audio: false,
      video: true,
    };

    if (cameraType === 'out-camera') {
      options.video = {
        facingMode: {
          exact: 'environment',
        }
      };
    }

    this.stream = await navigator.mediaDevices.getUserMedia(options).catch(error => {
      throw error;
    });
  }

  close() {
    if (!this.stream) {
      return;
    }

    this.stream.getVideoTracks().forEach(track => {
      track.stop();
    });

    this.stream.getAudioTracks().forEach(track => {
      track.stop();
    });
  }

  async cast(video: HTMLVideoElement) {
    await new Promise((resolve, reject) => {
      this.video = video;

      this.video.onloadeddata = () => {
        resolve();
      };

      this.video.onerror = () => {
        reject();
      };

      this.video.srcObject = this.stream;
    });

    this.canvas = document.createElement('canvas');
  }

  captureImage() {
    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;
    this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    const image = this.canvas.toDataURL('image/jpeg', 1.0);

    return image;
  }

}
