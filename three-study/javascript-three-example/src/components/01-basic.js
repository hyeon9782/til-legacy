import * as THREE from "three";

class App {
  constructor() {
    const divContainer = document.querySelector("#app");
    this._divContainer = divContainer;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    divContainer.appendChild(renderer.domElement);
    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._setupCamera();
    this._setupLight();
    this._setupModel();

    window.onresize = this.resize.bind(this);

    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  _setupCamera() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.z = 2;
    this._camera = camera;
  }

  _setupLight() {
    const color = 0xffffff; // 광원의 색상
    const intensity = 1; // 광원의 세기
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4); // 광원의 위치
    this._scene.add(light);
  }

  _setupModel() {
    const geometry = new THREE.BoxGeometry(1, 1, 1); // 정육면체를 생성하는 객체 (가로, 세로, 깊이)
    const material = new THREE.MeshPhongMaterial({ color: 0x44a88 }); // 박스의 제질 (파란색)

    const cube = new THREE.Mesh(geometry, material);
    this._scene.add(cube);
    this._cube = cube;
  }

  resize() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);
  }

  render(time) {
    this._renderer.render(this._scene, this._camera); // scene을 camera의 시점을 이용해서 렌더링해라
    this.update(time);
    requestAnimationFrame(this.render.bind(this));
  }

  update(time) {
    time *= 0.001;
    this._cube.rotation.x = time;
    this._cube.rotation.y = time;
  }
}

window.onload = function () {
  new App();
};
