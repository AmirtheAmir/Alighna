import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Employees from "./pages/Employees";
import StartingPage from "./pages/StartingPage";

function App() {
  return (
    <div className="h-dvh p-2 overflow-hidden">
      {/* Sidebar and Employee page */}
      <div className="flex flex-row h-full gap-6">
        {/* <div  className="w-1/6"> */}
        <div  className="w-70 shrink-0">
          <Sidebar />
        </div>
        <div className="min-w-0 flex-1">
          <Routes>
            <Route path="/employees" element={<Employees />}/>
            <Route path="/" element={<StartingPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
