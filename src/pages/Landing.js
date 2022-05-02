import React from "react";
import Header from "../components/Header";
import SearchContent from "../components/SearchContent";
import { DataProvider } from "../contexts/DataContext";

const Landing = () => {
  return (
    <DataProvider>
      <Header />
      <SearchContent />
    </DataProvider>
  );
};

export default Landing;
