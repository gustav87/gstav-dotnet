module.exports = {
  devServer: {
    https: process.env.NODE_ENV === 'development' ? true : false,
    disableHostCheck: process.env.NODE_ENV === 'development' ? true : false
  }
};
