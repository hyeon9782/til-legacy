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
    new OrbitControls(this._camera, this._divContainer);
  }

  _setupCamera() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.z = 7;
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
    const vertices = [-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0];

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    // const material = new THREE.LineBasicMaterial({
    //   color: 0xff0000,
    // });

    const material = new THREE.LineDashedMaterial({
      color: 0xffff00,
      dashSize: 0.2, // dashSize의 길이만큼 선이 그려지고
      gapSize: 0.1, // gapSize의 길이만큼 선이 그려지지 않는다
      scale: 4, // 이러한 표현을 몇 배로 할 지
    });

    const line = new THREE.LineLoop(geometry, material);
    line.computeLineDistances(); // LineDashedMaterial은 선의 길이를 참조해서 재질이 결정되므로 선의 길이를 계산해줘야함
    this._scene.add(line);

    // Points 부분!!
    // const vertices = [];
    // for (let i = 0; i < 10000; i++) {
    //   const x = THREE.MathUtils.randFloatSpread(5);
    //   const y = THREE.MathUtils.randFloatSpread(5);
    //   const z = THREE.MathUtils.randFloatSpread(5);
    //   vertices.push(x, y, z);
    // }

    // const geometry = new THREE.BufferGeometry();
    // geometry.setAttribute(
    //   "position",
    //   new THREE.Float32BufferAttribute(vertices, 3)
    // );

    // const sprite = new THREE.TextureLoader().load("circle.png");

    // const material = new THREE.PointsMaterial({
    //   map: sprite, // 자신이 원하는 사진으로 렌더링
    //   alphaTest: 0.5, // alphaTest 값보다 클때만 픽셀이 렌더링된다.
    //   color: "white",
    //   size: 0.1,
    //   sizeAttenuation: true, // 원근법을 적용할 것인지 여부
    // });

    // const points = new THREE.Points(geometry, material);
    // this._scene.add(points);
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
  }
}

window.onload = function () {
  new App();
};
