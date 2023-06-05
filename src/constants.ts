const constants = {
  backend_url: process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://react1-backend.gstav.se"
};

export default constants;
