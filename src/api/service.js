const baseURL = "http://localhost:3001";

const getCards = (value, page, limit) => {
  return fetch(
    `${baseURL}/search${value && "?q=" + value}&_page=${page}&_limit=${limit}`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
};

const starCard = (id, starred) => {
  return fetch(`${baseURL}/search/${id}`, {
    method: "PUT",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify(starred),
  });
};

export { starCard, getCards };
