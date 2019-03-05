const express = require('express');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dotenv = require('dotenv');


const config = require('../config/config');
const webpackConfig = require('../webpack.config');

// ============================================
// load env file
// ============================================
dotenv.load();

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;
const ip = process.env.IP || "localhost";


// ============================================
// Configuration
// ============================================


// Set up Mongoose
// --------------------------------------

mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.Promise = global.Promise;


// Express Call
// --------------------------------------
const app = express();
app.use(express.json());


// ============================================
// API routes
// ============================================

// CanvasRoute
// --------------------------------------
var canvaseRoutes = require("./routes/canvasRoutes");
app.use("/canvaseRoutes/", canvaseRoutes);


// ============================================
// Build Server
// ============================================

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}


app.listen(port, ip, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('>>> 🌎 Open http://' + ip + ':' + port + '/ in all the your browser in this network.');
});

module.exports = app;
