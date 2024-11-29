import './NavBar.css';
import { RouteNames } from '@/models/routes';
import { Link, useLocation } from "react-router";

function NavBar() {
  const path = useLocation().pathname;
  const setSelected = (incoming: string): string => path.includes(incoming) ? "text-blue-600 react1-navbar__disabled" : "";
  const navItemStyle = "p-2";

  return (
    <div className="bg-zinc-700 mb-5 uppercase font-bold text-white">
      <ul className="flex items-center h-20">
        <li className="mr-12 ml-4">
          <Link to={RouteNames.HOME}><img src="/klaus.png" width="70px" className="klaus"/></Link>
        </li>
        <li className="mr-6">
          <Link to={RouteNames.PROJECTS} className={`${navItemStyle} react1-clickable ${setSelected(RouteNames.PROJECTS)}`}>Projects</Link>
        </li>
        <li className="mr-6">
          <Link to={RouteNames.CONTACT} className={`${navItemStyle} react1-clickable ${setSelected(RouteNames.CONTACT)}`}>Contact</Link>
        </li>
        <li className="mr-6">
          <Link to={RouteNames.LOGIN} className={`${navItemStyle} react1-clickable ${setSelected(RouteNames.LOGIN)}`}>Log in</Link>
        </li>
        <li className="mr-6">
          <Link to={"#"} className="text-gray-400 cursor-not-allowed">Disabled</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
