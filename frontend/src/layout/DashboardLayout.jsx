import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-area">
        <Header/>

        <main className="dashboard-conteudo">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;