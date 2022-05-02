import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const ContentCard = (props) => {
  const { updateStarred } = useContext(DataContext);
  const {
    id,
    type,
    name,
    productCategory,
    previewText,
    image,
    taxonomy,
    description,
    address,
    starred,
  } = props.content;
  //   For Products, show name, product category, preview text and image (if available)
  // ○ For Animals show animal name, scientific name and image(if available)
  // ○ For Companies show name, description and address

  const renderContent = (type) => {
    if (type === "product") {
      return (
        <>
          <span className="card-title product ">
            Product {starred && <span className="starred-card">☆</span>}
          </span>
          <span>
            <strong>{name}</strong>
            <br />
            Category: {productCategory}
          </span>
          <span>
            <i>{previewText}</i>
          </span>
          {image && (
            <img className="image" src={image} alt={`Showing ${name}`} />
          )}
        </>
      );
    }

    if (type === "animal") {
      return (
        <>
          <span className="animal card-title">
            Animal {starred && <span className="starred-card">☆</span>}
          </span>
          <span>
            <strong>{name}</strong>
          </span>
          <span>Scientific Name: {taxonomy.scientificName}</span>
          {image && (
            <img className="image" src={image} alt={`Showing ${name}`} />
          )}
        </>
      );
    }

    if (type === "company") {
      const { address1, city, state, postalCode, address2 } = address;

      return (
        <>
          <span className="company card-title">
            Company {starred && <span className="starred-card">☆</span>}
          </span>

          <span>
            <strong>{name}</strong>
            <br />
            <span>{description}</span>
          </span>
          <span>
            Address: {address1}, {city}, {state} <br />
            Post Code: {postalCode}
            <br />
            {address2 && `Other: ${address2}`}
          </span>
        </>
      );
    }
  };

  return (
    <div
      className="content-card"
      onClick={() => {
        updateStarred(id, props.content);
      }}
    >
      {renderContent(type)}
    </div>
  );
};
export default ContentCard;
