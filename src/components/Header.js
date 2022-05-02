import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Header = () => {
  const { setSearchValue } = useContext(DataContext);
  const submit = (e) => {
    e.preventDefault();
    setSearchValue(e.target.querySelector("input").value);
  };

  return (
    <div className="header">
      <h1>Welcome! Use the input to search on the DataBase</h1>
      <form id="search-form" className="form-group" onSubmit={(e) => submit(e)}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          className="form-control search"
          id="search"
          placeholder="What are you looking for?"
          required
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </form>
      <button
        className="search-button"
        type="submit"
        form="search-form"
        value="Submit"
      >
        DB Search
      </button>
    </div>
  );
};

export default Header;
