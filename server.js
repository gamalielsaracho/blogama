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

import { urlApi, metaTags } from './././public/src/js/middleware'

app.get('/', function(req, res, next) {

  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    var content = {
      STRD_DESCRIPTION: '--------',

      ITEMPROP_DESCRIPTION: '--------',

      TW_TITLE: '--------',
      TW_DESCRIPTION: '--------',
      TW_AUTHOR: '--------',
      TW_IMAGE: '--------',

      OG_TITLE: 'Test Home Page',
      OG_URL: '--------',
      OG_IMAGE: 'https://i.imgur.com/V7irMl8.png',
      OG_DESCRIPTION: 'Testing 54 Home page description',
      OG_PUBLISHED_TIME: '--------',
      OG_MODIFIED_TIME: '--------',
      OG_ARTICLE_SECTION: '--------',
      OG_TAG: '-------'
    }

    res.send(metaTags(data, content));
  });
});


app.get('/blog', function(req, res, next) {

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    var content = {
      STRD_DESCRIPTION: '--------',

      ITEMPROP_DESCRIPTION: '--------',

      TW_TITLE: '--------',
      TW_DESCRIPTION: '--------',
      TW_AUTHOR: '--------',
      TW_IMAGE: '--------',

      OG_TITLE: 'el blog rural test.!',
      OG_URL: '--------',
      OG_IMAGE: 'https://www.djangoproject.com/s/img/logos/django-logo-negative.png',
      OG_DESCRIPTION: ':) Haso este blog, pero ya da.',
      OG_PUBLISHED_TIME: '--------',
      OG_MODIFIED_TIME: '--------',
      OG_ARTICLE_SECTION: '--------',
      OG_TAG: '-------'
    }
    
    res.send(metaTags(data, content));
  });
});


app.get('/blog/:nameFolder', function(req, res, next) {

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    axios.get(`${urlApi}/publications/publications.json`)
    .then((publicationsList) => {
      var publications = eval(publicationsList.data)

      publications.map((i) => {
        if(i.namefolder == req.params.nameFolder) {
          axios.get(`${urlApi}/publications/${req.params.nameFolder}/post.md`)
          .then((post) => {

            i.content = post.data

            // console.log(i)

            var content = {
              STRD_DESCRIPTION: i.description,

              ITEMPROP_DESCRIPTION: i.description,

              TW_TITLE: i.title,
              TW_DESCRIPTION: i.description,
              TW_AUTHOR: i.authorTwitter,
              TW_IMAGE: i.image_twitter,

              OG_TITLE: i.title,
              OG_URL: i.urlContent,
              OG_IMAGE: i.image_facebook,
              OG_DESCRIPTION: i.description,
              OG_PUBLISHED_TIME: i.published_time,
              OG_MODIFIED_TIME: i.modified_time,
              OG_ARTICLE_SECTION: i.articleSection,
              OG_TAG: i.tag
            }

            res.send(metaTags(data, content));
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

	console.log('Server is listening on port 5000')
})