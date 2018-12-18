import express from 'express'
import axios from 'axios'
import cors from 'cors'

import config from './config/config'

const path = require('path');
const fs = require('fs')

var app = express()

app.use(cors())

// for my satatic files.
app.use(express.static('public'))

var filePath = './index.html'

import { urlApi } from './././public/src/js/middleware'

app.get('/', function(req, res, next) {

  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, 'Home Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
    var result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    res.send(result);
  });
});


app.get('/blog', function(req, res, next) {

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, 'el blog rural.!');
    data = data.replace(/\$OG_DESCRIPTION/g, "haso este blog, pero ya da.");
    var result = data.replace(/\$OG_IMAGE/g, 'https://www.djangoproject.com/s/img/logos/django-logo-negative.png');
    res.send(result);
  });
});


app.get('/blog/:nameFolder', function(req, res, next) {

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    axios.get(`${urlApi}/publications/publications.json`)
    .then((content) => {
      var publications = eval(content.data)

      publications.map((i) => {
        if(i.namefolder == req.params.nameFolder) {
          axios.get(`${urlApi}/publications/${req.params.nameFolder}/post.md`)
          .then((content) => {

            i.content = content.data

            // console.log(i)

            // replace the special strings with server generated strings
            data = data.replace(/\$OG_TITLE/g, i.title);
            data = data.replace(/\$OG_DESCRIPTION/g, i.description);
            var result = data.replace(/\$OG_IMAGE/g, i.image_facebook);
            res.send(result);
          })
          .catch((err) => {
            console.log(err)
          })
        }
      })
    })
    .catch((err) => {
      console.log(err)
    })
  });
});


app.listen(config.server.port, function(err) {
  if (err) {
    console.log(err)
  }

	console.log('Server is listening on port 3000')
})