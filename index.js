const express = require('express');
const app = express();
require('dotenv').config()

//connection with mongodb database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('mongooose connected');
});

app.use(express.json()); // express.json return middleware and app.use uses that middleware
app.use(require('./routers'))

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
})