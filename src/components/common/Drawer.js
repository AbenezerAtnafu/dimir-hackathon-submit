import React from "react";

const Drawer = function ({ children, isOpen, setIsOpen, type }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 inset-0 transform ease-in-out border-0" +
        (isOpen
          ? " transition-opacity opacity-100 duration-[1000ms] translate-x-0  "
          : " transition-all delay-[700ms] opacity-0 translate-y-full  ")
      }
    >
      <section
        className={
          "relative z-10 w-full mx-auto bg-black h-full delay-[700ms] duration-[1000ms] ease-in-out transition-all transform  " +
          (isOpen ? " translate-y-0 " : "-translate-y-full")
        }
      >
        <article className="relative pb-10 flex flex-col space-y-6 overflow-hidden h-full">
          <>{children}</>
        </article>
      </section>
    </main>
  );
};

export default Drawer;
