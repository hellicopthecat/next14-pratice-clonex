"use client";

import {ReactNode, createContext, useState} from "react";
const TabContext = createContext({
  tab: "rec",
  setTab: (value: "rec" | "fol") => {},
});

export default function TabProvider({children}: {children: ReactNode}) {
  const [tab, setTab] = useState("rec");
  return (
    <TabContext.Provider value={{tab, setTab}}>{children}</TabContext.Provider>
  );
}
