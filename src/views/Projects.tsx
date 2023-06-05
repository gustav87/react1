import { Outlet } from "react-router-dom";

function Projects() {
  return <>
    <h1 className="text-4xl mb-10">Projects!</h1>
    <a href="/projects/tictactoe" className="hover:text-blue-800">Tic Tac Toe</a>
    <Outlet/>
  </>
}

export default Projects;

