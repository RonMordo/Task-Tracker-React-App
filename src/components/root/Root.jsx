import { Outlet, NavLink } from "react-router-dom";

function Root() {
  return (
    <div className="app">
      <h1>Task Tracker App</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Tasks Page
        </NavLink>
        <NavLink
          to="/taskForm"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Add Task
        </NavLink>
      </nav>
      <Outlet />
      <footer>
        <h4>Created by Ron</h4>
      </footer>
    </div>
  );
}

export default Root;
