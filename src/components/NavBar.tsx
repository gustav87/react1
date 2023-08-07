import './NavBar.css';
import { routes } from '@/models/routes';
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const path = useLocation().pathname;
  const setSelected = (incoming: string): string => path.includes(incoming) ? "text-blue-600 disabled" : "";
  const navItemStyle = "p-2 hover:text-blue-600 active:text-blue-800";

  return (
    <div className="bg-zinc-700 mb-5 uppercase font-bold text-white">
      <ul className="flex items-center h-20">
        <li className="mr-12 ml-4">
          <Link to={routes.HOME}><img src="/klaus.png" width="70px" className="klaus"/></Link>
        </li>
        <li className="mr-6">
          <Link to={routes.PROJECTS} className={`${navItemStyle} ${setSelected(routes.PROJECTS)}`}>Projects</Link>
        </li>
        <li className="mr-6">
          <Link to={routes.CONTACT} className={`${navItemStyle} ${setSelected(routes.CONTACT)}`}>Contact</Link>
        </li>
        <li className="mr-6">
          <Link to={routes.LOGIN} className={`${navItemStyle} ${setSelected(routes.LOGIN)}`}>Log in</Link>
        </li>
        <li className="mr-6">
          <Link to={"#"} className="text-gray-400 cursor-not-allowed">Disabled</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
