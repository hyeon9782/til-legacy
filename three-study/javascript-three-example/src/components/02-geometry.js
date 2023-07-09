import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

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
    this._setupControls();

    window.onresize = this.resize.bind(this);

    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  _setupControls() {
    new OrbitControls(this._camera, this._divContainer); // 3D 객체를 컨트롤할 수 있도록 해준다
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
    const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2); // 정육면체를 생성하는 객체 (가로, 세로, 깊이)
    // const geometry = new THREE.CircleGeometry(0.4, 16, 0, Math.PI / 2); // 원판 객체를 생성 (반지름, 분할 개수, 시작 각도, 연장 각도)
    // const geometry = new THREE.ConeGeometry(); // 원뿔 객체 생성 (반지름, 높이, 분할 개수(둘레), 분할 개수(높이 방향), 원뿔 밑면을 열지, 원뿔의 시작각, 원뿔의 연장각)
    // const geometry = new THREE.CylinderGeometry(); // 원통 객체를 생성 (반지름 (아래), 반지름 (위), 높이, 분할 개수 (둘레 방향), 분핼 개수 (높이 방향), 밑면을 열어 놓을지, )
    const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 }); // 회색의 오브젝트
    const cube = new THREE.Mesh(geometry, fillMaterial);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 }); // 노란 선
    const line = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry), // 모델의 모든 대각선을 표시해준다.
      lineMaterial
    );

    const group = new THREE.Group(); // cube와 line을 하나의 객체로 만들기 위해 group으로 만든다.

    group.add(cube);
    group.add(line);
    this._scene.add(group);
    this._cube = group;
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
    // this._cube.rotation.x = time;
    // this._cube.rotation.y = time;
  }
}

window.onload = function () {
  new App();
};
