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

  // ngOnInit(){
  //   var scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
  //   // camera.position.set( 0, 20, 100 );
  //   // controls.update();
  //   var renderer = new THREE.WebGLRenderer({ alpha: true  });
  //   renderer.shadowMap.enabled = true;
  //   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  //   renderer.setPixelRatio(window.devicePixelRatio);
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(renderer.domElement);

  //   // controls

  //   // load headphone model
  //   var loader = new GLTFLoader();

  //   loader.load('assets/model/Watertower.glb', function (model) {

  //     model.scene.traverse(c => {
  //       c.castShadow = true;
  //     });

  //     // add model
  //     scene.add(model.scene);

  //     // add light
  //     var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
  //     scene.add(ambientLight);

  //     var pointLight1 = new THREE.PointLight(0xFF0040, 4 ,50);
  //     scene.add(pointLight1);

  //     var pointLight2 = new THREE.PointLight(0x0040FF, 3 ,50);
  //     scene.add(pointLight2);
      
  //     var pointLight3 = new THREE.PointLight(0x80FF80, 4 ,50);
  //     scene.add(pointLight3);

  //     renderer.render(scene, camera);
  //   },
  //     undefined, function (error) {
  //       console.error(error);
  //     }
  //   );

  //   // renderer.render(scene, camera);
  // }
  
}
