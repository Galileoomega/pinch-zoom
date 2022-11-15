import { Component, VERSION, ViewChild } from '@angular/core';
import { PinchZoomComponent } from './pinch-zoom/pinch-zoom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @ViewChild('pinch') pinchZoom: PinchZoomComponent;

  move() {
    this.pinchZoom.setTransform({ x: 1, y: 1, scale: 1 });
  }
}
