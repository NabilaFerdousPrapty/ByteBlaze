import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("synthwave");
      console.log(theme);
    } else {
      setTheme("light");
      console.log(theme);
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg px-4 fixed  z-10">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost  gap-0 text-secondary normal-case text-2xl">
            Byte<span className="text-primary">Blaze</span>
          </Link>
        </div>

        <div className="flex-none ">
          <ul className="menu menu-horizontal  font-bold lg:gap-5 md:gap-2 md:flex-row flex-col">
            <NavLink to="/" className={({isActive})=>isActive?'text-primary':''}>Home</NavLink>

            <NavLink to="/blogs" className={({isActive})=>isActive?'text-primary':''}>
              Blogs
            </NavLink>
            <NavLink to="/bookmarks" className={({isActive})=>isActive?'text-primary':''}>Bookmarks</NavLink>
          </ul>
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
