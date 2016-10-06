const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../src'));
// app.get('/', (req, res) => {

// })

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/auth/session', (req, res) => {
  console.log('sup...');
  req.session = {user: null}
  if (req.session.user) {
    console.log('req.session.user : ', req.session.user)
    res.status(200).end();
  } else {
    console.log('no session...')
    res.status(400).end();
  }
});
  
app.post('/auth/local', (req, res) => {
  let data = '';

  req.on('data', (c) => {
    data += c;
  }).on('end', () => {
    data = JSON.parse(data.toString());
    // check if user credentials match...
    if (checkCred(data)) {
      console.log('user cred is ok')
      res.status(200).send(JSON.stringify({token: 'testing this special token'}));
    } else {
      console.log('user cred is wrong')
      res.status(400).end();
    }
  })
});

app.listen(4000, () => { console.log('AUTHENTICATION SERVICE LISTENING ON PORT 4000')});



function checkCred(user) {
  return user.username === "temp username" && user.pw === 'temp password';
}