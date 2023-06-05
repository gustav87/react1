function Frontpage() {
  return <>
    <div className="text-left max-w-5xl">
      <p className="mb-7">My name is Gustav Andersson and I'm a web developer from Sweden.</p>
      <p className="mb-7">This page is made with React, Vite and Tailwind CSS in the frontend, C# .NET in the backend and a MongoDB database.</p>
      <p className="mb-7">The code is open source on GitHub.</p>
      <p className="mb-7">There is a CI/CD pipeline on Azure which automatically builds the app and deploys it as a Docker container which serves this website.</p>
      <p>The project serves as a learning tool and playground for me.</p>
    </div>
  </>
}

export default Frontpage;
