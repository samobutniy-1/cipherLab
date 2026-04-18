import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./components/homepage/HomePage";
import { Ciphers } from "./components/ciphers/Ciphers";

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
        <Route path="/ciphers" element={<Ciphers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
