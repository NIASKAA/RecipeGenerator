const mongoose = require('mongoose')
require('dotenv').config()

// If you want to connect to your own mongodb atlas use this
// mongoose.connect(process.env.MONGOKEY || 'mongodb://localhost/projectHR', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

//module.exports = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/RecipeGenerator', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

module.exports = mongoose.connection