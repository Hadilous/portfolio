import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeJSViewer({ modelPath, hideKeywords = ["Cube"] }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // === Scene ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);

    // === Camera ===
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(3, 1.5, 10);

    // === Renderer ===
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // === Controls ===
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // === Lights ===
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 2);
    directional.position.set(5, 10, 7);
    directional.castShadow = true;
    scene.add(directional);

    // === Ground Plane ===
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: 0x111111 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);

    // === Load GLB Model ===
    let mixer = null;
    const loader = new GLTFLoader();
    loader.load(
  modelPath,
  (gltf) => {
    console.log("GLB loaded:", gltf);

    // Check if there’s anything in the scene
    console.log("Scene children:", gltf.scene.children);

    // Check bounding box size
    const box = new THREE.Box3().setFromObject(gltf.scene);
    console.log("Bounding box size:", box.getSize(new THREE.Vector3()));

    scene.add(gltf.scene);
  },
  undefined,
  (error) => console.error("Failed to load model:", error)
);



    // === Animation Loop ===
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(clock.getDelta());
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // === Handle Resize ===
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      if (mixer) mixer.stopAllAction();
    };
  }, [modelPath, hideKeywords]);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
}
