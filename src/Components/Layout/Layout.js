import React from "react";
import Header from "../Header/Header";
import RightSide from "../Aside/RightSide/RightSide";
import { SidebarUserData } from "../../Data/Data";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <main className="flex bg-lightWhite">
      <aside className="min-w-[5%] bg-white h-screen shadow-md lg:flex flex-col items-center justify-start gap-4 sticky top-0 hidden px-2 pt-16">
        {SidebarUserData.map((data, index) => (
          <Link
            key={index}
            to={data.location}
            className=" first:bg-pink flex items-center justify-center rounded-xl first:text-white w-10 h-10 bg-white shadow-md"
          >
            <data.icon />
          </Link>
        ))}
      </aside>

      <section className="w-full lg:w-[72%] xl:w-[77%]">
        <header className="w-full sticky top-0 z-50">
          <Header />
        </header>
        <section className="overflow-y-scroll scrollbar-hide">
          {props.children}
        </section>
      </section>
      <aside className="bg-white shadow-md hidden lg:block lg:w-[23%] xl:min-w-[18%] h-screen sticky top-0">
        <RightSide/>
      </aside>
    </main>
  );
};

export default Layout;
