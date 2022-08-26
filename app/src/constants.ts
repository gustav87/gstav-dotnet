const constants = {
  port: process.env.NODE_ENV === "development" ? 5001 : 5000,
  protocol: "https"
};
export default constants;
