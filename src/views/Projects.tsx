import { Outlet, Link } from "react-router-dom";
import { routes } from '@/models/routes';

function Projects() {
  return <>
    <h1 className="text-4xl mb-10">Projects!</h1>
    <div className="flex justify-around w-2/4 mb-10">
      <Link to={routes.PROJECTS_TICTACTOE} className="hover:text-blue-600">Tic Tac Toe</Link>
      <Link to={routes.PROJECTS_STATE} className="hover:text-blue-600">State</Link>
      <Link to={routes.PROJECTS_S3} className="hover:text-blue-600">Amazon S3</Link>
      <Link to={routes.PROJECTS_ALIBABA} className="hover:text-blue-600">Alibaba OSS</Link>
    </div>
    <Outlet/>
  </>
}

export default Projects;
