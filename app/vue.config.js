module.exports = {
  devServer: {
//    https: process.env.NODE_ENV === 'development' ? true : false,
    allowedHosts: process.env.NODE_ENV === 'development' ? "all" : "gstav.se"
  }
};
