import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/Oraganism/SideBar";
import EmployeePage from "./components/Pages/EmployeePage";
import WelcomePage from "./components/Pages/WelcomePage";

function App() {
  return (
    <div className="h-dvh p-2 overflow-hidden">
      <div className="flex flex-row h-full gap-2">
        <div className="w-74 shrink-0">
          <SideBar />
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <Routes>
            <Route path="/employees" element={<EmployeePage />} />
            <Route path="/" element={<WelcomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
