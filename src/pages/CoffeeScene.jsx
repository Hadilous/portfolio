import ThreeJSViewer from "../components/ThreeJSViewer";

export default function CoffeeScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ThreeJSViewer modelPath="/projects/coffee.glb"  />
    </div>
  );
}
