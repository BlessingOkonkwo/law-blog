import { Outlet } from "react-router-dom";
import Header from "./header";
import React from "react";

export const ApiContext = React.createContext({});

const Layout = () => {
  const value = React.useMemo(() => ({}), []);

  return (
    <ApiContext.Provider value={value}>
      <div className="bg-[#f2f2f2] h-full px-8 sm:px-16 py-8 min-h-scree">
        <Header />
        <main className="mt-[50px] pb-[70px] h-full mx-auto max-w-[1128px]">
          <Outlet />
        </main>
      </div>
    </ApiContext.Provider>
  );
};

export default Layout;
