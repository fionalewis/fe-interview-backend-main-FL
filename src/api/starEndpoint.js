const baseURL = "http://localhost:3001";

const starCard = (id, starred) => {
  return fetch(`${baseURL}/search/${id}`, {
    method: "PUT",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify(starred),
  });
};

export default starCard;
