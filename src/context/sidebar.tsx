import { createContext, useContext, useState } from "react";

interface SidebarType {
  sidebarShow: string;
  setSidebarShow: React.Dispatch<React.SetStateAction<string>>;
}
const SidebarContext = createContext<SidebarType | undefined>(undefined);

const useSidebar = () => {
  return useContext(SidebarContext);
};

const SidebarProvider = (props: any) => {
  const [sidebarShow, setSidebarShow] = useState("responsive");
  return (
    <SidebarContext.Provider
      value={{
        sidebarShow,
        setSidebarShow,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, useSidebar };
