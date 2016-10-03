const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../src'));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  
app.post('/auth/local', (req, res) => {
  console.log('USER OK TO LOGIN...');
  res.status(200).end();
});


app.listen(4000, () => { console.log('AUTHENTICATION SERVICE LISTENING ON PORT 4000')});