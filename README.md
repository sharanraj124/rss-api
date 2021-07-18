# Rss api
  get rss feed from (url)[https://www.reddit.com/.rss]


## Requirements:

    * Node.js v14.15.4+
    * Npm

## Getting Started

clone the repo

```bash
git clone https://github.com/sharanraj124/wallet-system.git
cd wallet-system
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
https://wallet-system-app.herokuapp.com/
```


## Testing with heroku url:

1. Get transctions for your wallet:

```curl
curl https://wallet-system-app.herokuapp.com/search/?key="keywod"
```


## API Endpoint with local Testing using curl:

3. Get transctions for your wallet:

```curl
curl http://localhost:5500/search/?key="keywod"
```
