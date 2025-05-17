import { Route, Routes } from "react-router-dom";
import SaveTheDatePage from "@/pages/SaveTheDatePage.tsx";
import InvitationPage from "@/pages/InvitationPage.tsx";

function App() {
  return (
    <Routes>
        <Route element={<SaveTheDatePage />} path="/" />
        <Route element={<InvitationPage />} path="/invite" />
    </Routes>
  );
}

export default App;
