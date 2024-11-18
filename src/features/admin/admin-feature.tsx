import { Outlet } from "react-router-dom";
import AppNavBar from "../../components/navbar/app-navbar";

const AdminFeature = () => {
  return (
    <>
      <AppNavBar />
      <Outlet />
    </>
  );
};

export default AdminFeature;
