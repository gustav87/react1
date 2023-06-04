import './NavBar.css';

function NavBar() {
  const navItemStyle = "p-2 hover:text-blue-800 uppercase font-bold text-white hover:text-white hover:bg-sky-700";
  return (
    <div className="bg-zinc-700 mb-5">
      <ul className="flex items-center h-20">
        <li className="mr-12 ml-4">
          <a href="/"><img src="/klaus.png" width="70px" className="klaus"/></a>
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
