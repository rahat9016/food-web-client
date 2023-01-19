import React from "react";
import Header from "../Header/Header";
import LeftSide from "../Aside/LeftSide/LeftSide";
import RightSide from "../Aside/RightSide/RightSide";
// import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      {props.admin ? (
        <div>
          {/* Admin */}
          <div className="flex">
            <aside className="w-[15%] bg-[#030848] h-screen">
              <LeftSide />
            </aside>
            <main className="w-[85%]">{props.children}</main>
          </div>
        </div>
      ) : (
        <div>
          {/* User */}
          <div className="flex">
            <aside className="h-full hidden  sticky top-0  md:block w-[5%]">
              <LeftSide />
            </aside>
            <div
              className={`w-full bg-lightWhite md:w-[75%]  ${
                window.location.pathname === "/checkout"
                  ? "md:w-full"
                  : "md:block md:w-[75%]"
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
                  : "md:block md:w-[20%]"
              }`}
            >
              <RightSide />
            </aside>
          </div>
          <footer className="w-[100%] bg-white drop-shadow-sm">
            {/* <Footer /> */}
          </footer>
        </div>
      )}
    </div>
  );
};

export default Layout;
