# React Todo List Frontend

A modern, responsive frontend for a Todo List application built with React 19 and Vite. This project demonstrates a clean architecture using **Atomic Design** principles and integrates seamlessly with a backend API for full task management capabilities.

## 🚀 Features

- **Task Management**:
  - 📋 **View All Tasks**: Fetch and display a list of tasks from the backend.
  - ✨ **Create Task**: Add new tasks easily.
  - ✏️ **Update Task**: Edit existing task details.
  - ✅ **Complete Task**: Mark tasks as done.
  - 🗑️ **Delete Task**: Remove unwanted tasks.
- **Modern Tech Stack**: Built with the latest React 19 and Vite 7 for blazing fast performance.
- **Atomic Design**: Organized component structure (Atoms, Molecules, Organisms, Pages) for scalability and maintainability.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/) (v7)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Architecture**: Atomic Design

## 📂 Project Structure

The project follows the Atomic Design methodology:

```
src/
├── api/            # API integration logic (Axios calls)
├── components/     # UI Components
│   ├── atoms/      # Basic building blocks (Buttons, Inputs)
│   ├── molecules/  # Groups of atoms (Form fields)
│   ├── organisms/  # Complex UI sections (Task Lists, Forms)
│   └── pages/      # Full page views (TaskManagementPage)
├── assets/         # Static assets
└── ...
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/react-todo-list-fe.git
    cd react-todo-list-fe
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Configure API**
    Ensure your backend server is running. By default, the application connects to:
    `http://localhost:8000/api/tasks`

    You can modify the API URL in `src/api/taskApi.js` if needed.

4.  **Run the development server**

    ```bash
    npm run dev
    ```

5.  **Build for production**
    ```bash
    npm run build
    ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
