import './NavBar.css';

function NavBar() {
  const navItemStyle = "hover:text-blue-800 uppercase font-bold text-white hover:text-white hover:bg-sky-700";
  return (
    <div className="flex p-6 bg-zinc-700 align-middle">
      <ul className="flex">
        <li className="mr-12">
          <a className={navItemStyle} href="/">
            <img src="/klaus.png" width="50px" className="klaus"/>
          </a>
        </li>
        <li className="mr-6">
          <a className={navItemStyle} href="/projects">Projects</a>
        </li>
        <li className="mr-6">
          <a className={navItemStyle} href="/contact">Contact</a>
        </li>
        <li className="mr-6">
          <a className={navItemStyle} href="/hi">Hi</a>
        </li>
        <li className="mr-6">
          <a className="text-gray-400 cursor-not-allowed uppercase font-bold" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
