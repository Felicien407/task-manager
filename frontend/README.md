# TaskFlow | React Task Manager Frontend

A sleek, responsive task management dashboard built with React and Tailwind CSS. This frontend is designed to consume the TaskFlow REST API and provide a seamless user experience for managing daily workflows.

---

## ✨ Key Features

* **Kanban Board View:** Drag-and-drop task status updates (Planned).
* **Real-time CRUD:** Create, edit, and delete tasks with immediate UI updates.
* **Priority Tagging:** Categorize tasks by Low, Medium, or High urgency.
* **Filtering:** Sort tasks by category, status, or due date.
* **Authentication:** Secure login and registration integration.

---

## 🛠️ Tech Stack

* **Framework:** [React 18](https://reactjs.org/) (Vite)
* **State Management:** [Context API](https://reactjs.org/docs/context.html)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **API Client:** [Axios](https://axios-http.com/)

---

## 📂 Project Structure

```text
src/
├── assets/         # Optimized images and global styles
├── components/     # Reusable UI components (Buttons, Inputs, Cards)
├── context/        # Task and Auth state management
├── hooks/          # Custom hooks (e.g., useFetch, useLocalStorage)
├── pages/          # Main views (Dashboard, Login, Settings)
├── services/       # API interaction logic
└── utils/          # Helper functions and constants