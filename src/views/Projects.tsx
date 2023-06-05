function Projects() {
  return (
    <div>Projects!</div>
  );
}

function submitSearchDbForm() {
  const queryString = this.filter ? `?filter=${this.filter}` : '';

  fetch(`${constants.backend_url}/api/guests${queryString}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        this.searchResult = "Something went wrong with the database.";
      }
    })
    .then(res => {
      if (res) {
        this.showTable = true
        this.documents = res
      }
    })
    .catch(err => {
      this.searchResult = "Something went wrong with the backend.";
      console.error(err)
    })
}

export default Projects;

