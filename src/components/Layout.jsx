import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <nav className="w-full h-[7vh] flex justify-between items-center">
          <div className="pl-4 space-x-8 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-serif text-xl border-b-2 border-blue-400"
                  : "font-serif text-xl "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="sorting"
              className={({ isActive }) =>
                isActive
                  ? "font-serif text-xl border-b-2 border-blue-400"
                  : "font-serif text-xl "
              }
            >
              Sorting
            </NavLink>
            <NavLink
              to="searching"
              className={({ isActive }) =>
                isActive
                  ? "font-serif text-xl border-b-2 border-blue-400"
                  : "font-serif text-xl "
              }
            >
              Searching
            </NavLink>
            <NavLink
              to="pathfinding"
              className={({ isActive }) =>
                isActive
                  ? "font-serif text-xl border-b-2 border-blue-400"
                  : "font-serif text-xl "
              }
            >
              Pathfinding
            </NavLink>
          </div>
          <div>

          </div>
        </nav>
      </header>
      <body>
        <Outlet />
      </body>
    </div>
  );
}
