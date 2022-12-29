const constants = {
  port: process.env.NODE_ENV === "development" ? 5001 : 5000,
  protocol: "https",
  backend_url: process.env.NODE_ENV === "development" ? "https://localhost:5001" : "https://backend.gstav.se"
};

export default constants;
