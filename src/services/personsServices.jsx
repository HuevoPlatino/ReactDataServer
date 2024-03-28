


const baseUrl = "http://localhost:3000/persons";

const getAll = () => {
  const request = fetch(baseUrl).then((response) => {
    return response.json();
  });
  return request;
};

const create = (newObject) => {
  const request = fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  }).then((response) => {
    return response.json();
  });
  return request;
};

const personDelete = (id) => {
  const request = fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
  return request;
};

const numberEdit = (id, newPhoneNumber, name) => {
  const data = {
    name: name,
    number: newPhoneNumber,
  };
  const request = fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
  return request;
};

export default {
  getAll: getAll,
  create: create,
  personDelete: personDelete,
  numberEdit: numberEdit,
};
