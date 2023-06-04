function NavBar() {
  return (
    <ul class="flex">
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="/">About</a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="/hi">Hi</a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="/projects">Projects</a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="/contact-me">Contact Me</a>
      </li>
      <li class="mr-6">
        <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
      </li>
    </ul>
  );
}

export default NavBar;

