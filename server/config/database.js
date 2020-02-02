const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/node-auth')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));
