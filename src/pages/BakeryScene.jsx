import ThreeJSViewer from "../components/ThreeJSViewer";

export default function BakeryScene() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      <ThreeJSViewer modelPath="/projects/bakeryscene.glb"  hideKeywords={["Cube.001", "Cube.006", "Cube.011"]}/>
    </div>
  );
}
