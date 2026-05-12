const BASE = "http://localhost:7000/api/tasks/";

export const getTasks = async () => {
  const tasks = await fetch(BASE);
  return tasks.json();
};

export const createTask = async (title) => {
  const body = { title: title };
  const tasks = await fetch(BASE, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  return tasks.json();
};

export const deleteTask = async (id) => {
  await fetch(`${BASE}${id}`, {
    method: "DELETE",
  });
};

export const updateTask = async (id, title) =>{
  const res = await fetch(`${BASE}${id}`, {
    method: "PUT",
    body: JSON.stringify({title}),
    headers: { "Content-Type" : "application/json" }
  })
  return res.json()
}

export const toggleTask = async (id) => {
  await fetch(`${BASE}${id}`, {
    method: "PATCH"
  })
}