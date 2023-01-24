import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SidebarAdminData } from "../../Data/Data";

const Sidebar = (props) => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="flex">
      <div className="w-[15%] bg-bgBlue h-screen">
        {auth.authenticate && auth.admin === true ? (
          <div className="px-2 text-textLight ">
            {SidebarAdminData.length > 0
              ? SidebarAdminData.map((data, index) => {
                  return (
                    <Link
                      key={index}
                      to={data.location}
                      className={`flex items-center gap-3 text-xl font-nunito hover:bg-bgLightBlue mb-2 p-2 py-2 rounded-md ${
                        window.location.pathname === data.location
                          ? "bg-bgLightBlue"
                          : ""
                      }`}
                    >
                      <data.icon />
                      <span>{data.heading}</span>
                    </Link>
                  );
                })
              : null}
          </div>
        ) : null}
      </div>
      <div className="w-[85%]">{props.children}</div>
    </div>
  );
};

export default Sidebar;
