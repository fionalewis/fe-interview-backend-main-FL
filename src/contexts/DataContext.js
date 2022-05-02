import React, { useState, createContext, useEffect } from "react";
import starCard from "../api/starEndpoint";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const baseURL = "http://localhost:3001";

  const [all, setAll] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [starred, setStarred] = useState(0);

  const updateStarred = (id, data) => {
    setLoading(true);
    data.starred = !data.starred;
    starCard(id, data).then(setStarred(starred + (data.starred ? 1 : -1)));
    setLoading(false);
  };

  useEffect(() => {
    if (searchValue) {
      (async () => {
        setLoading(true);

        fetch(
          `${baseURL}/search${
            searchValue && "?q=" + searchValue
          }&_page=1&_limit=10`,
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((result) => {
            setAll(result);
            setCompanies(result.filter((r) => r.type === "company"));
            setAnimals(result.filter((r) => r.type === "animal"));
            setProducts(result.filter((r) => r.type === "product"));

            setStarred(result.filter((r) => r.starred).length);
            setLoading(false);
          });
      })();
    }
  }, [searchValue]);

  return (
    <DataContext.Provider
      value={{
        all,
        starred,
        products,
        animals,
        companies,
        loading,
        setSearchValue,
        updateStarred,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
