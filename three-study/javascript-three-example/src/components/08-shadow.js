import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper";

class App {
  constructor() {
    const divContainer = document.querySelector("#app");
    this._divContainer = divContainer;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
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
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    // camera.position.z = 2;
    camera.position.set(7, 7, 0);
    camera.lookAt(0, 0, 0);
    this._camera = camera;
  }

  _setupLight() {
    // const auxLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // auxLight.position.set(0, 5, 0);
    // auxLight.target.position.set(0, 0, 0);
    // this._scene.add(auxLight.target);
    // this._scene.add(auxLight);

    // const light = new THREE.DirectionalLight(0xffffff, 0.5); // (색상, 세기)
    // light.position.set(0, 5, 0); // 광원의 위치
    // light.target.position.set(0, 0, 0); // 광원이 비치는 대상의 위치
    // this._scene.add(light.target);
    // light.shadow.camera.top = light.shadow.camera.right = 6;
    // light.shadow.camera.bottom = light.shadow.camera.left = -6;

    // const light = new THREE.PointLight(0xffffff, 0.7);
    // light.position.set(0, 5, 0);

    const light = new THREE.SpotLight(0xffffff, 1);
    light.position.set(0, 5, 0);
    light.target.position.set(0, 0, 0);
    light.angle = THREE.MathUtils.degToRad(10);
    light.penumbra = 0.2;
    this._scene.add(light.target);

    light.shadow.mapSize.width = light.shadow.mapSize.height = 2048; // 그림자 품질 향상
    light.shadow.radius = 1; // 그림자의 외각을 블러링(흐릿하게) 처리한다.

    // const helper = new THREE.DirectionalLightHelper(light); // light(광원)을 시각화 해주는 객체 선으로 광원을 방향을 파악할 수 있다.
    // this._scene.add(helper);
    // this._lightHelper = helper;

    this._scene.add(light);
    this._light = light;
    light.castShadow = true;
  }

  _setupModel() {
    // Ground 객체 생성
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: "#2c3e50",
      roughness: 0.5,
      metalness: 0.5,
      side: THREE.DoubleSide,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = THREE.MathUtils.degToRad(-90);
    ground.receiveShadow = true; // 그림자 설정
    this._scene.add(ground);

    // BigSphere
    // const bigSphereGeometry = new THREE.SphereGeometry(1.5, 64, 64, 0, Math.PI);
    const bigSphereGeometry = new THREE.TorusKnotGeometry(
      1,
      0.3,
      128,
      64,
      2,
      3
    );
    const bigSphereMaterial = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      roughness: 0.1,
      metalness: 0.2,
    });
    const bigSphere = new THREE.Mesh(bigSphereGeometry, bigSphereMaterial);
    //bigSphere.rotation.x = THREE.MathUtils.degToRad(-90);
    bigSphere.position.y = 1.6;
    bigSphere.receiveShadow = true; // 그림자를 받는지 여부
    bigSphere.castShadow = true; // 그림자를 주는지 여부
    this._scene.add(bigSphere);

    // TorusPivot과 Torus
    const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: "#9b59b6",
      roughness: 0.5,
      metalness: 0.9,
    });

    for (let i = 0; i < 8; i++) {
      const torusPivot = new THREE.Object3D();
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torusPivot.rotation.y = THREE.MathUtils.degToRad(45 * i);
      torus.position.set(3, 0.5, 0);
      torusPivot.add(torus);
      torus.receiveShadow = true;
      torus.castShadow = true;
      this._scene.add(torusPivot);
    }

    // smallSphere
    const smallSphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const smallSphereMaterial = new THREE.MeshStandardMaterial({
      color: "#e74c3c",
      roughness: 0.2,
      metalness: 0.5,
    });
    const smallSpherePivot = new THREE.Object3D();
    const smallSphere = new THREE.Mesh(
      smallSphereGeometry,
      smallSphereMaterial
    );
    smallSpherePivot.add(smallSphere);
    smallSpherePivot.name = "smallSpherePivot";
    smallSphere.position.set(3, 0.5, 0);
    smallSphere.receiveShadow = true;
    smallSphere.castShadow = true;
    this._scene.add(smallSpherePivot);
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
    const smallSpherePivot = this._scene.getObjectByName("smallSpherePivot");
    if (smallSpherePivot) {
      smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50);

      // 빗의 방향이 회전하는 작은 구체를 따라가도록 하는 코드
      if (this._light.target) {
        const smallSphere = smallSpherePivot.children[0];
        smallSphere.getWorldPosition(this._light.target.position);
        if (this._lightHelper) this._lightHelper.update();
      }

      // PointLight
      // 그림자를 던지는 광원의 위치에 따라서 그림자가 변한다
      if (this._light instanceof THREE.PointLight) {
        const smallSphere = smallSpherePivot.children[0];
        smallSphere.getWorldPosition(this._light.position);
      }
    }
  }
}

window.onload = function () {
  new App();
};
