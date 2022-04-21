import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";

export const NotesGrid = () => {
  return (
    <div className=" grid grid-cols-[18vw_1fr] min-h-[92vh] lg:grid-cols-1 ">
      <Sidebar />
      <Outlet />
    </div>
  );
};
