import React, { useState, createContext, useEffect } from "react";
import { getCards, getStarred, starCard } from "../api/service";

export const DataContext = createContext();

export const DataProvider = (props) => {
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
    getStarred().then((result) => {
      setStarred(result.length);
    });
  }, []);

  useEffect(() => {
    if (searchValue) {
      (async () => {
        setLoading(true);

        getCards(searchValue, 1, 10).then((result) => {
          setAll(result);
          setCompanies(result.filter((r) => r.type === "company"));
          setAnimals(result.filter((r) => r.type === "animal"));
          setProducts(result.filter((r) => r.type === "product"));

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
