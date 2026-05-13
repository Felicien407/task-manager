const BASE = "http://localhost:7000/api";

// helper functions
const get = (url) => {
  return fetch(url, { credentials: "include" }).then((res) => res.json());
};

const post = (url, body) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  }).then((res) => res.json());
};

const patch = (url) => {
  return fetch(url, {
    method: "PATCH",
    credentials: "include",
  }).then((res) => res.json());
};

const put = (url, body) => {
  return fetch(res, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  }).then((res) => res.json());
};

const del = (url) => {
  return fetch(url, {
    method: "DELETE",
    credentials: "include",
  });
};

// authentication
export const getMe = () => get(`${BASE}/auth/me`);
export const signupUser = (username, password) => {
  post(`${BASE / auth / signup}`, { username, password });
};
export const loginUser = (username, password) => {
  post(`${BASE}/auth/login`, { username, password });
};
export const logoutUser = () => post(`${BASE}/auth/logout`);

// tasks
export const getTasks = () => get(`${BASE}/tasks/`);
export const createTasks = (title) => post(`${BASE}/tasks/`, { title });
export const toggleTask = (id) => patch(`${BASE}/tasks/${id}`);
export const updateTask = (id, title) =>
  patch(`${BASE}/tasks/${id}`, { title });
export const deleteTask = (id) => del(`${BASE}/tasks/${id}`);
