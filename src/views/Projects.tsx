import constants from "@/constants";
import { Outlet } from "react-router-dom";

function Projects() {
  return <>
    <h1 className="text-4xl mb-10" onClick={handleClick}>Projects!</h1>
    <a href="/projects/tictactoe" className="hover:text-blue-800">Tic Tac Toe</a>
    <Outlet/>
  </>
}

function handleClick() {
  console.log(constants.backend_url);
}

export default Projects;

