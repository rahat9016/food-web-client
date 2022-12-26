import React from "react";
import Header from "../Header/Header";
import LeftSide from "../Aside/LeftSide/LeftSide";
import RightSide from "../Aside/RightSide/RightSide";
// import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <div className="flex">
        <aside className="h-screen md:w-[5%] hidden bg-white drop-shadow-sm  md:flex justify-center">
          <LeftSide />
        </aside>
        <div className="w-full md:w-[75%] bg-lightWhite">
          <header>
            <Header />
          </header>
          <main>{props.children}</main>
        </div>
        <aside className="hidden md:block md:w-[20%] bg-white drop-shadow-sm">
          <RightSide />
        </aside>
      </div>
      <footer className="w-[100%] bg-white drop-shadow-sm">
        {/* <Footer /> */}
      </footer>
    </div>
  );
};

export default Layout;
