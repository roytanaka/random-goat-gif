'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios').default;
const mustacheExpress = require('mustache-express');
const PORT = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/', async (req, res) => {
  const rand = Math.floor(Math.random() * Math.floor(200));

  try {
    const tenorRes = await axios.get(
      `https://g.tenor.com/v1/search?key=${process.env.TENOR_API}&q=funny-goats&locale=en_US&contentfilter=medium&limit=1&media_filter=minimal&pos=${rand}`
    );
    const data = tenorRes.data.results[0];
    const { mp4, gif } = data.media[0];
    res.render('index', {
      imageGiphy: data.url,
      imageDescription: data.h1_title,
      imageUrl: gif.url,
      imageWidth: gif.dims[0],
      imageHeight: gif.dims[1],
      videoUrl: mp4.url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).redirect('/error.html');
  }
});

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
