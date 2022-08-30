const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
//Core Node Modules
const fs = require('fs');
const path = require('path');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', function(req, res) {
      res.sendFile('index.html', { root: __dirname }, function(err) {
        if (err) {
          res.status(500).send(err);
        }
      });
    });

app.listen(port, err => {
  if (err) console.info(`Error: The server failed to start on ${port}`);
  else console.info(`****** Node server is running on ${port} ******`);
});