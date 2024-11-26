# Todo Application

This project is a **Todo Application** built using **React.js**. It allows users to add, delete, modify, and manage tasks interactively. The application is styled for an engaging user experience, incorporating dynamic particle effects in the background.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)
- [License](#license)

---

## Project Overview

The **Todo Application** provides a feature-rich and interactive platform for task management. Users can:
- Add tasks to their todo list.
- Mark tasks as done.
- Edit tasks by changing them to uppercase or lowercase.
- Delete individual tasks or clear all tasks.
- Use bulk actions for efficiency, like marking all tasks as done.

It also features an interactive particle animation background for visual appeal.

---

## Features

- Add tasks to the todo list.
- Delete individual or all tasks.
- Edit tasks by changing text to uppercase or lowercase.
- Mark tasks as done.
- Display a message when all tasks are completed.
- Interactive particle background for an enhanced user experience.

---

## Technologies Used

- **Frontend:**
  - React.js
- **Styling:**
  - CSS
  - Custom animations
- **Libraries:**
  - tsparticles for particle effects
  - uuid for generating unique task IDs
  - React state management with hooks

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anshuman-Jha-01/React-todo-app.git
   cd React-todo-app

2. **Install dependencies:**
    ```bash 
    npm install

3. **Start the development server:**
    ```bash 
    npm create vite
    npm run dev

4. **Open the application in your browser:**
    ```bash
      http://localhost:5173/

## Usage
1. Add tasks using the input box.
2. Modify individual tasks:
    - Mark as done.
    - Change text to uppercase or lowercase.
    - Delete specific tasks.
3. Use bulk operations to manage all tasks at once:
    - Mark all as done.
    - Change all tasks to uppercase or lowercase.
    - Delete all tasks.
4. Enjoy the dynamic particle effects in the background.

## Components
1. ```App.jsx```
  - Root component that renders the application.
  - Integrates ```Todo``` and ```ParticlesComponent```.

2. ```Todo.jsx```
  - Main component managing task list and actions.
  - Integrates ```AddTask```, ```TaskList```, and ```Features```.

3. ```AddTask.jsx```
  - Allows users to add new tasks.

4. ```TaskList.jsx```
  - Renders the list of tasks and integrates the ```Task``` component.

5. ```Task.jsx```
  - Displays individual tasks and their respective actions.

6. ```Features.jsx```
  - Provides bulk actions like marking all tasks as done or deleting all tasks.

7. ```Particle.jsx```
  - Adds an interactive particle animation background.

## Project Structure
  ```bash
    /src
    ├── App.jsx             # Main app component
    ├── Todo.jsx            # Core todo component
    ├── AddTask.jsx         # Component to add new tasks
    ├── TaskList.jsx        # Component to list all tasks
    ├── Task.jsx            # Component for individual tasks
    ├── Features.jsx        # Bulk actions for tasks
    ├── Particles.jsx       # Particle effects component
    ├── App.css             # Styling for App.jsx
    ├── Todo.css            # Styling for Todo.jsx
    ├── index.css           # Global styling
    ├── main.jsx            # Entry point for React app
    ├── index.html          # HTML template
  ```

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
