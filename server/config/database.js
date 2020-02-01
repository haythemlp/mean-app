const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node-auth', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));
