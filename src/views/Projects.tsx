import { Outlet } from "react-router-dom";

function Projects() {
  return <>
    <h1 className="text-4xl mb-10">Projects!</h1>
    <div className="flex justify-around w-1/4 mb-10">
      <a href="/projects/tictactoe" className="hover:text-blue-800">Tic Tac Toe</a>
      <a href="/projects/state" className="hover:text-blue-800">State</a>
    </div>
    <Outlet/>
  </>
}

export default Projects;

