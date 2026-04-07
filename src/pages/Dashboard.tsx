import { useLocation } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import OverviewView from "@/components/dashboard/OverviewView";
import ModulosView from "@/components/dashboard/ModulosView";
import MateriaisView from "@/components/dashboard/MateriaisView";
import SettingsView from "@/components/dashboard/SettingsView";

const Dashboard = () => {
  const location = useLocation();
  const hash = location.hash;

  return (
    <DashboardLayout>
      {hash === "#modulos" ? <ModulosView /> :
       hash === "#materiais" ? <MateriaisView /> :
       hash === "#settings" ? <SettingsView /> :
       <OverviewView />}
    </DashboardLayout>
  );
};

export default Dashboard;
