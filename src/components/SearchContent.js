import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import ContentCard from "./ContentCard";

const SearchContent = () => {
  const { all, loading, starred } = useContext(DataContext);
  return (
    <div className="search-content">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <span className="starred-content">Starred items: {starred}</span>
          <div className="search-results">
            {all.length ? (
              all.map((c) => <ContentCard key={c.id} content={c} />)
            ) : (
              <span>No results found.</span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchContent;
