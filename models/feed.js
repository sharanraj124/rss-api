const mongoose = require('mongoose');

const FeedSchema = mongoose.Schema({

   _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    feedKey: {
        type: String,
        index: true
    },
    feedData: {
        type: mongoose.Schema.Types.Mixed
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('feed', FeedSchema);