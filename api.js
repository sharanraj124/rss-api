const Parser = require('rss-parser');
const Feed = require('./models/feed')

exports.getFeed = async (req, res) => {
      let keyword = req.query && req.query.key || '';
      // let parser = new Parser();
      let parser = new Parser()

      try {

        let isKey = await Feed.find({feedKey: keyword});
        let data;

        if (isKey.length > 0) {

          data = await Feed.findOne({feedKey: keyword});

        } else {

          let feed = await parser.parseURL('https://www.reddit.com/.rss');

          let arr = [];
          feed.items.forEach(item => {
            if(item.title.includes(keyword)) {
              arr.push(item);
            }
          });

          saveFeed = new Feed({
            feedKey: keyword,
            feedData: arr
          });

          data = await saveFeed.save();
        }

        res.status(200).send({data});

      } catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
}