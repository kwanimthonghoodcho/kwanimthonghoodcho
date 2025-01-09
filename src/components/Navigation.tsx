import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li><NavLink to="/" activeClassName="active">Kwan Im Thong Hood Cho Temple 觀音堂佛祖廟</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About Us 關於我們</NavLink></li>
        <li><NavLink to="/chunti" activeClassName="active">Chunti Mantra 準提咒</NavLink></li>
        <li><NavLink to="/lots" activeClassName="active">Goddess of Mercy Lots 觀音簽</NavLink></li>
        <li><NavLink to="/donations" activeClassName="active">Donations 捐款</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
