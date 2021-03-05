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

app.use('/', async (req, res) => {
  try {
    const giphyRes = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPPHY_API}&tag=goats&rating=g`
    );
    const data = giphyRes.data.data;
    const { mp4, url, height, width } = data.images.original;
    res.render('index', {
      imageGiphy: data.url,
      imageDescription: data.title,
      imageUrl: url,
      imageWidth: width,
      imageHeight: height,
      videoUrl: mp4,
    });
  } catch (error) {
    console.error('/ error:', error);
  }
});

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
