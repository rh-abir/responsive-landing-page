import Sidebar from "@/pages/admin/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-x-5">
      <Sidebar />
      <div className="col-span-10 h-[200vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
