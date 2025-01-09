import { NavLink } from "react-router-dom";
import './Navigation.css'; // Optional: Add custom styles for this component

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kwan Im Thong Hood Cho Temple 觀音堂佛祖廟
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us 關於我們
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chunti"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Chunti Mantra 準提咒
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lots"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Goddess of Mercy Lots 觀音簽
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donations"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Donations 捐款
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
