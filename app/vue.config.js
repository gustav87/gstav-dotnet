module.exports = {
  devServer: {
    https: process.env.NODE_ENV === 'production' ? false : true,
    disableHostCheck: process.env.NODE_ENV === 'production' ? false : true
  }
};
