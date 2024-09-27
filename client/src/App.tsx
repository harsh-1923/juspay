import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DesignDocPage from "./Pages/DesignDocPage/DesignDocPage";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main className="app">
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/design" element={<DesignDocPage />} />
        </Routes>
        <Toaster toastOptions={{ className: "toast" }} />
      </main>
    </ThemeProvider>
  );
}

export default App;
