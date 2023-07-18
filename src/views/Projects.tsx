import { Outlet } from "react-router-dom";
import { routes } from '@/models/routes';

function Projects() {
  return <>
    <h1 className="text-4xl mb-10">Projects!</h1>
    <div className="flex justify-around w-1/4 mb-10">
      <a href={routes.PROJECTS_TICTACTOE} className="hover:text-blue-800">Tic Tac Toe</a>
      <a href={routes.PROJECTS_STATE} className="hover:text-blue-800">State</a>
    </div>
    <Outlet/>
  </>
}

export default Projects;
