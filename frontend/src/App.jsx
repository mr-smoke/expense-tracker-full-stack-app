import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GridBackgroundDemo } from "./components/ui/Background";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <GridBackgroundDemo>
          <p>some</p>
          <main>
            <Routes>
              <Route path="/" component={<Home />} exact />
            </Routes>
          </main>
        </GridBackgroundDemo>
      </BrowserRouter>
    </>
  );
}

export default App;
