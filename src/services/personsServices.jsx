const baseUrl = "http://localhost:3000/persons";

const handleResponse = (response) => {
  if (!response.ok) {
    return response.json().then((json) => {
      throw new Error(json.error || `Server responded with status: ${response.status}`);
    });
  }
  return response.json();
};

const getAll = () => {
  return fetch(baseUrl).then(handleResponse);
};

const create = (newObject) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  }).then(handleResponse);
};

const personDelete = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  })
  .then(handleResponse)
  .catch((error) => {
    console.error('Error:', error);
    throw error;
  });
};

const numberEdit = (id, newPhoneNumber, name) => {
  const data = {
    name: name,
    number: newPhoneNumber,
  };
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(handleResponse);
};

export default {
  getAll: getAll,
  create: create,
  personDelete: personDelete,
  numberEdit: numberEdit,
};
