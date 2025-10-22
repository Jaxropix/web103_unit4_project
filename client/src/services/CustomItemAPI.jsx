const BASE_URL = 'http://localhost:3000/api'; // Remove /customItems

export const getAllCustomItems = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  return await response.json();
};

export const getCustomItem = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return await response.json();
};

export const createCustomItem = async (item) => {
  const response = await fetch(`${BASE_URL}/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });
  return await response.json();
};

export const updateCustomItem = async (id, item) => {
  const response = await fetch(`${BASE_URL}/edit/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });
  return await response.json();
};

export const deleteCustomItem = async (id) => {
  const response = await fetch(`${BASE_URL}/delete/${id}`, {
    method: 'DELETE'
  });
  return await response.json();
};