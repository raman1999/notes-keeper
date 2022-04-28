import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { MdLabelOutline } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  console.log(showSideBar);
  function getActiveStyle({ isActive }) {
    return isActive
      ? "sidebar-link text-yellow-700 dark:text-yellow-400 "
      : "sidebar-link";
  }

  return (
    <>
      <ul
        className={`sidebar gap-1 pt-5  bg-white dark:bg-black  ${
          showSideBar && "left-0"
        }`}
      >
        <li className="list-item">
          <NavLink to="/notes" className={getActiveStyle} end={true}>
            <BsPencilSquare />
            <span className="ml-3 text-xl">Notes</span>
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/notes/labels" className={getActiveStyle}>
            <MdLabelOutline />
            <span className="ml-3 text-xl">Labels</span>
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/notes/archive" className={getActiveStyle}>
            <BiArchiveIn />
            <span className="ml-3 text-xl">Archive</span>
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/notes/trash" className={getActiveStyle}>
            <BsTrash />
            <span className="ml-3 text-xl">Trash</span>
          </NavLink>
        </li>
        <GiHamburgerMenu
          className="hidden lg:block  fixed top-6 left-4 text-gray-600 dark:text-gray-200"
          size={20}
          onClick={() => setShowSideBar(!showSideBar)}
        />
      </ul>
    </>
  );
};
