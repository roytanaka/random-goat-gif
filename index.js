'use strict';
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
      `https://api.giphy.com/v1/gifs/random?api_key=4x1BLBVGj8byXpfHMhkh3tx9RJc17xJo&tag=goats&rating=g`
    );
    const gifUrl = giphyRes.data.data.images.downsized_large.url;
    res.render('index', { imageUrl: gifUrl });
  } catch (error) {
    console.error('/ error:', error);
  }
});

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
