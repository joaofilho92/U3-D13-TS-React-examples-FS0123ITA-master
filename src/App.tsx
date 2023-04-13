import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import Home from "./components/Home";
import BootstrapElements from "./components/BootstrapElements";
import FormComponent from "./components/FormComponent";
import FetchComponent from "./components/FetchComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/class-component"
              element={
                <>
                  <ClassComponent title="Ciao a tutti, sono un class component!" />
                  <ClassComponent title="Ciao component!" subtitle="Epicode" />
                </>
              }
            />
            <Route
              path="/functional/:id"
              element={<FunctionalComponent title="Hello, I'm a functional component" subtitle="another thing here" />}
            />
            <Route path="/bootstrap-elements" element={<BootstrapElements />} />
            <Route path="/form" element={<FormComponent />} />
            <Route path="/fetch" element={<FetchComponent />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
