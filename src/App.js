import "./App.css";
import PdfViewerComponent from "./components/PdfViewerComponent";

function App() {
  return (
    <div className="App">
      <div className="PDF-viewer">
        <PdfViewerComponent document={"test_pdf1.pdf"} />
      </div>
    </div>
  );
}

export default App;
