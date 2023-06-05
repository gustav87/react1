import constants from "@/constants";

function TicTacToe() {
  return <>
    <h1 className="text-2xl mb-5" onClick={handleClick}>Here's a Tic Tac Toe game I made.</h1>
    <div onClick={send}>Test backend</div>
  </>
}

function handleClick() {
  console.log(constants.backend_url);
}

function send() {
  fetch(`${constants.backend_url}/api/test`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        this.searchResult = "Something went wrong with the database.";
      }
    })
    .then(res => {
      if (res) {
        console.log(res);
      }
    })
    .catch(err => {
      console.error(err)
    })
}

export default TicTacToe;

