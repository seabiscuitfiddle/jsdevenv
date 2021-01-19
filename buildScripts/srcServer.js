// express is the basic web server
import express from 'express';
// path is the current path of the executing file (?), might be path of the file we're in
import path from 'path';
// opens up a TCP server at port (?)
import open from 'open';
// brings in webpack support
import webpack from 'webpack';
// default export from the config file
import config from '../webpack.config.dev';

// port to open at
const port = 3000;
// express start
const app = express();
// configures the webpack compiler with the earlier config file
const compiler = webpack(config);

// Injects middleware into Express
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

// app configuration for routing, basic /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// starts the listener; if successful uses the open library to listen for requests
app.listen(port, (err) => {
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
