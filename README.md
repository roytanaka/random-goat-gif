# Random Goat Gifs

An oddly specific app that displays a random animated gif featuring goats via the Giphy API. Includes Open Graph Meta Tags for embedded gifs on social media platforms.

## Development

Clone this repo.

```sh
git clone https://github.com/roytanaka/random-goat-gif.git
```

Setup project with:

```sh
npm install
```

Compile and auto restart node after save for development:

```sh
npm run dev
```

## Giphy API Key

Head to [Tenor's Developer portal](https://tenor.com/gifapi/documentation#quickstart-setup) and generate your API Key. It will be a 12 character code that contains both letters and numbers.

## .env File

Create a file named `.env` in your root directory and add your API key with the variable `TENOR_API`.

```
TENOR_API=YourApiKey123ABC
```
