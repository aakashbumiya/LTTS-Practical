import { SceneService } from './scene.service';
import {Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SceneService]
})
export class AppComponent {
  
  constructor(
    private scene: SceneService
  ) { }

  @ViewChild('container')
  set container(container: ElementRef) {
    this.scene.initialize(container.nativeElement);
  }
  
}
