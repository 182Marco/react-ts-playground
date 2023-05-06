import { Ref, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { routes } from "../../Router";
import "./style.scss";

export const Navbar = () => {
  const { pathname } = useLocation();
  const el = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (el?.current) {
      el.current.scrollIntoView({ behavior: "smooth", inline: "end" });
    }
  }, [pathname]);

  return (
    <>
      <nav>
        {routes.map(e => (
          <span key={e.to}>
            {e.isInNavbar !== false && (
              <Link
                to={e.to}
                className={e.to === pathname ? "active" : ""}
                ref={e.to === pathname ? el : undefined}
              >
                {e.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
