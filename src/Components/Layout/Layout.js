import React from "react";
import Header from "../Header/Header";
import LeftSide from "../Aside/LeftSide/LeftSide";
import RightSide from "../Aside/RightSide/RightSide";
// import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <div>
        {/* User */}
        <div className="flex">
          <aside className="h-full hidden  sticky top-0  lg:block w-[80px]">
            <LeftSide />
          </aside>
          <div
            className={`w-full bg-lightWhite lg:w-[75%]  ${
              window.location.pathname === "/checkout"
                ? "lg:w-full"
                : "lg:block lg:w-[75%]"
            }`}
          >
            <header className="sticky top-0 z-50	">
              <Header />
            </header>
            <main>{props.children}</main>
          </div>
          <aside
            className={`h-full hidden  sticky top-0 bg-white drop-shadow-sm ${
              window.location.pathname === "/checkout"
                ? "hidden"
                : "lg:block lg:w-[20%]"
            }`}
          >
            <RightSide size="h-screen" />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Layout;
