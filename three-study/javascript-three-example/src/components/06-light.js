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
    // const light = new THREE.AmbientLight(0xffffff, 5); // (색상, 세기)
    // AmbientLight는 주변광 또는 환경광이라고 불리며
    // Scene에 존재하는 모든 물체에 대해서 단일 생상으로 렌더링 해주는 역할
    // 대부분의 경우 세기값을 매우 약하게하여 장면에 추가하고
    // 광원의 영향을 받지 못하는 물체도 살짝 보여지도록 한다

    // const light = new THREE.HemisphereLight("0xffffff", "#bb7aic", 1); (위에서 빛이는 색상, 아래에서 빛이는 색상, 빛의 세기)
    // HemisphereLight도 마찬가지로 주변광이지만 AmbientLight와 다른점은
    // 빛의 색상 값이 하나가 아니라 2개이다 (하나는 위에서 빛이는 빛의 색상, 아래에서 빛이는 색상)

    // const light = new THREE.DirectionalLight(0xffffff, 1); // (색상, 세기)
    // light.position.set(0, 5, 0); // 광원의 위치
    // light.target.position.set(0, 0, 0); // 광원이 비치는 대상의 위치
    // this._scene.add(light.target);

    // const helper = new THREE.DirectionalLightHelper(light); // light(광원)을 시각화 해주는 객체 선으로 광원을 방향을 파악할 수 있다.
    // this._scene.add(helper);
    // this._lightHelper = helper;
    // DirectionalLight는 태양과 같이 빛과 물체와의 거리와 상관없이 동일한 빛을 준다.

    // const light = new THREE.PointLight(0xffffff, 2);
    // light.position.set(0, 5, 0);
    // light.distance = 1; // 해당 속성에 지정된 거리까지만 광원의 여향을 받게 한다. 0은 무한

    // const helper = new THREE.PointLightHelper(light);
    // this._scene.add(helper);
    // PointLight는 빛이 광원의 위치에서 사방으로 퍼져나간다

    // const light = new THREE.SpotLight(0xffffff, 1);
    // light.position.set(0, 5, 0);
    // light.target.position.set(0, 0, 0);
    // light.angle = THREE.MathUtils.degToRad(30); // 광원이 만드는 깔대기 모양의 각도
    // light.penumbra = 1; // 빛의 감세율 0이면 빛의 감세가 없다
    // this._scene.add(light.target);

    // const helper = new THREE.SpotLightHelper(light);
    // this._scene.add(helper);
    // this._lightHelper = helper;
    // SpotLight 빛이 광원의 위치에서 깔대기 모양으로 퍼져나간다.

    RectAreaLightUniformsLib.init(); // RectAreaLight를 사용하기 위해서는 먼저 초기화 코드를 작성해야 한다.

    const light = new THREE.RectAreaLight(0xffffff, 10, 3, 0.5); // (색상, 세기, 가로 크기, 세로 크기)
    light.position.set(0, 5, 0);
    light.rotation.x = THREE.MathUtils.degToRad(-90);
    // 이전까지는 광원을 방향을 대상의 위치로 지정했지만
    // RectAreaLight는 광원의 각도로 지정한다.

    const helper = new RectAreaLightHelper(light);
    light.add(helper);
    // RectAreaLight는 형광동이나 창문에서 들어오는 광원이다.
    // 실제로는 여러 종류의 광원을 2개 이상 사용합니다.

    this._scene.add(light);
    this._light = light;
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
    this._scene.add(ground);

    // BigSphere
    const bigSphereGeometry = new THREE.SphereGeometry(1.5, 64, 64, 0, Math.PI);
    const bigSphereMaterial = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      roughness: 0.1,
      metalness: 0.2,
    });
    const bigSphere = new THREE.Mesh(bigSphereGeometry, bigSphereMaterial);
    bigSphere.rotation.x = THREE.MathUtils.degToRad(-90);
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
    }
  }
}

window.onload = function () {
  new App();
};
