# Rss api
  get rss feed from (url)[https://www.reddit.com/.rss]


## Requirements:

    * Node.js v14.15.4+
    * Npm

## Getting Started

clone the repo

```bash
https://github.com/sharanraj124/rss-api.git
cd rss-api
```

### Install Node.js Dependencies

```shell-script
npm install
```

### Running Locally

```
npm run start
```

## Databse config:

  * I used mongodb as a Databse platform in mongocloud.

  If can you use local mongodb modify the Database configuration.

## Deploying to Heroku:
  Access the api using heroku link.

```bash
https://rss-feedapi.herokuapp.com/
```


## Testing with heroku url:

1. Get transctions for your wallet:

```curl
curl https://rss-feedapi.herokuapp.com/search/?key="keyword"
```


## API Endpoint with local Testing using curl:

3. Get transctions for your wallet:

```curl
curl http://localhost:5500/search/?key="keyword"
```
