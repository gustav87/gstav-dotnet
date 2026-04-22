const constants = {
  backend_url: process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://backend.biang.gstav.se"
};

export default constants;
