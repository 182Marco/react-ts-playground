import { Link, Outlet, useLocation } from "react-router-dom";
import { routes } from "../../Router";
import "./style.scss";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav>
        {routes.map(e => (
          <Link
            key={e.to}
            to={e.to}
            className={e.to === pathname ? "active" : ""}
          >
            {e.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
