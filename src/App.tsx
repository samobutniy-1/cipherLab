import { HomePage } from "./components/homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-[#0a0a0f] w-full h-full flex items-center justify-center">
              <HomePage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
