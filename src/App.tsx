import { Route, Routes } from "react-router-dom";
import SaveTheDatePage from "@/pages/SaveTheDatePage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<SaveTheDatePage />} path="/" />
    </Routes>
  );
}

export default App;
